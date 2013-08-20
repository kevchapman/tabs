#Tabs
Lightweight jQuery tabs

## Basic usage
```html

<div id="tab1" class="tabs">
	<ul class="tab_nav">
		<li><a href="#tabItem01">tab01</a></li>
		<li><a href="#tabItem02">tab02</a></li>
		<li><a href="#tabItem03">tab03</a></li>
	</ul>
	<div class="tab_mask">
		<div class="tab_scroll">
			<div class="tab_item">
				<h3>tab01</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, vel, reiciendis, sint, ratione odit quasi illo repellat ex impedit ipsam numquam quo odio commodi nemo saepe optio molestiae. Ad, commodi!</p>
			</div>
			<div class="tab_item">
				<h3>tab02</h3>
			</div>
			<div class="tab_item">
				<h3>tab03</h3>
				<p>Added extra copy to demo heights</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, ipsum tempore magnam quae quas quia fugit quis nobis rem accusantium vitae odit eaque ex reiciendis doloribus. Sequi minima asperiores repellendus.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, ipsum tempore magnam quae quas quia fugit quis nobis rem accusantium vitae odit eaque ex reiciendis doloribus. Sequi minima asperiores repellendus.</p>
			</div>
		</div>
	</div>
</div>

<script src="jquery.js"></script>
<script src="src/tabs.min.js"></script>
<script>
jQuery(function($) {
  $('#tab1').tabs();
});
</script>
```
## defaults
```html
{
	nav: 'ul.tab_nav',
	mask:'div.tab_mask',
	speed: 70, // speed of the height transition set to 0 for no transition
	items: 'div.tab_item',
	scroll: 'div.tab_scroll',
	fixedHeight: false, // set as an integer for a fixed height [no need for px suffix]
	autosize:false,
	animation:false,
	startTab:0, // index of starting tab
	callback:false // function to run when calling a tab
}

```
## images
if the tab item contains any images and the tabs is set without a fixed height. Add width and height props to the images to maintain the correct height of the tab