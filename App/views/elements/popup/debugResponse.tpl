<div id="debugModal" class="modal fade">
<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title">レンダリング時間</h4>
		</div>
		<div class="modal-body">
			<p>このページ表示の処理時間<br>(<span id="start"></span> 開始)</p>
			<table class="table table-striped">
				<tr><th>redirect</th><td ><span id="redirect">200</span><span >ms</span></td></tr>
				<tr><th>appCache</th><td ><span id="appCache">200</span><span >ms</span></td></tr>
				<tr><th>dns</th><td ><span id="dns">200</span><span >ms</span></td></tr>
				<tr><th>tcp</th><td ><span id="tcp">200</span><span >ms</span></td></tr>
				<tr><th>request</th><td ><span id="request">200</span><span >ms</span></td></tr>
				<tr><th>response</th><td ><span id="response">200</span><span >ms</span></td></tr>
				<tr><th>_processing</th><td ><span id="_processing">200</span><span >ms</span></td></tr>
				<tr><th>domContentLoaded</th><td ><span id="domContentLoaded">200</span><span >ms</span></td></tr>
				<tr><th>load</th><td ><span id="load">200</span><span >ms</span></td></tr>
				<tr><th>total</th><td ><span id="total">200</span><span >ms</span></td></tr>
			</table>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal">閉じる</button>
		</div>
	</div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
</div>

<!-- ▼ JS ▼ -->
<script src="/js/debugResponce.js"></script>
<!-- ▲ JS ▲ -->
