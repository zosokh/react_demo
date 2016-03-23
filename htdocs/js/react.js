var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: '/api/select.php',
      dataType: 'json',
      type: 'POST',
      data	:{
  			'limit' : limit,
  		},
      cache: false,
      success: function(data) {
        this.setState({data: data['json'][0]});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props, status, err.toString());
        // console.log(xhr);
      }.bind(this),
    });
  },
  handleCommentSubmit: function(comment) {
    console.log(comment);
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: '/api/create.php',
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        newComments = comments.concat([data['json'][0]['item']]);
        this.setState({data: newComments});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    // console.log(this.state.data);
    return (
      <div className="row">
        <div className="row mt20 txtct">
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
        <div className="itemlist_h1">
            <h1>ITEM LIST</h1>
        </div>
        <div className="row mt20">
          <CommentList data={this.state.data} />
        </div>
      </div>
    );
  }
});


var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <div className="col-md-3 col-sm-6 itemBox">
          <div className="thumbnail ">
            <div className="item_imgbox">
              <img className="img-rounded img-responsive" src={comment.img} />
            </div>
            <Comment title={comment.name}>
                {comment.comment}
            </Comment>
          </div>
        </div>
      );
    });
    return (
      <div className="row">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    // console.log();
    var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    var comment = ReactDOM.findDOMNode(this.refs.comment).value.trim();
    var img = ReactDOM.findDOMNode(this.refs.img).value.trim();
    var price = ReactDOM.findDOMNode(this.refs.price).value.trim();
    // console.log(name);
    if (!comment || !name || !price) {
      return;
    }
    this.props.onCommentSubmit({name: name, comment: comment, img: img, price: price});
    ReactDOM.findDOMNode(this.refs.name).value = '';
    ReactDOM.findDOMNode(this.refs.comment).value = '';
    ReactDOM.findDOMNode(this.refs.img).value = '';
    ReactDOM.findDOMNode(this.refs.price).value = '';
    return;
  },
  render: function() {
    return (
      <form name="form" className="form" onSubmit={this.handleSubmit}>
          <div className="mt20">
              <input size="30" maxLength="30" className="form-control" placeholder="タイトル" ref="name" type="text" />
          </div>
          <div className="mt20">
              <textarea cols="30" rows="10" className="form-control" placeholder="詳細" ref="comment"></textarea>
          </div>
          <div className="mt20">
              <input size="30" maxLength="300" className="form-control" placeholder="画像パス" ref="img" type="text" />
          </div>
          <div className="mt20">
              <input size="10" maxLength="10" className="form-control" placeholder="価格" ref="price" type="text" />
          </div>
          <div className="mt20">
              <input className="btn btn-danger btn-lg" value="登録する" type="submit" />
          </div>
      </form>
    );
  }
});

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="caption textOverflow">
        <h4>{this.props.title}</h4>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/js/comments.json" pollInterval={2000} />,
  document.getElementById('item_content')
);
