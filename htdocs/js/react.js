var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: '/api/select.php',
      // url: this.props.url,
      dataType: 'json',
      data	:{
  			'limit' : 20
  		},
      cache: false,
      success: function(data) {
        // console.log(data['json']);
        this.setState({data: data['json'][0]});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props, status, err.toString());
        // console.log(xhr);
      }.bind(this),
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        console.log(data);
        this.setState({data: data});
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
    console.log(this.state.data);
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});


var CommentList = React.createClass({
  render: function() {
    console.log(this.props.data);
    var countItem = this.props.data.length;
    var commentNodes = this.props.data.map(function (comment) {
      console.log(comment.name);
      var fourBlockTop = '';
      var fourBlockEnd = '';
      if (comment.id % 4 == 0) {
        fourBlockTop = 'row';
      } else if (((comment.id + 1) %4 == 0) || (countItem == comment.id + 1)) {
        fourBlockEnd = '';
      }
      return (
      <div className={fourBlockTop}>
        <div className="col-md-3 col-sm-6">
          <div className="thumbnail ">
            <div className="item_imgbox">
              <img className="img-rounded img-responsive" src={comment.img} />
            </div>
            <Comment author={comment.name}>
                {comment.comment}
            </Comment>
          </div>
        </div>
      </div>
      );
    });
    console.log(commentNodes);
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
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
      <div className="caption">
        <h4>{this.props.author}</h4>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/js/comments.json" pollInterval={2000} />,
  document.getElementById('item_content')
);
