#Tabs
Lightweight jQuery tabs

## Basic usage
```html
<script src="jquery.js"></script>
<script src="src/tabs.min.js"></script>
<script>
jQuery(function($) {
  $('jquery selector').tabs();
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