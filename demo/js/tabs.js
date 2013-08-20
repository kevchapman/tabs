;(function($){
	function Tabs(ele,opts){
		var defaults = {
			nav: 'ul.tab_nav',
			mask:'div.tab_mask',
			speed: 70,
			items: 'div.tab_item',
			scroll: 'div.tab_scroll',
			fixedHeight: false,
			autosize:false,
			animation:false,
			startTab:0,
			callback:false,
			initCb: false
		}
		var o = $.extend({},defaults,opts);
		this.opts = o;
		this.ele = ele;
		this.nav = ele.find(o.nav);
		this.navItems = this.nav.find('a');
		this.scroll = ele.find(o.scroll);
		this.items = ele.find(o.items);
		this.mask = ele.find(o.mask);
		this.tabs = [];
		this.init();
	}
	Tabs.prototype = {
		init: function(){
			var t = this;
			this.layout();
			this.navItems.each(function(i){
				var $t = $(this);
				$t.data({id:i}).click(function(){
					t.goTo( $t.data().id );return false;
				});
			});

			// deep linking
			function matchHash(){
				var l = t.tabs.length, i, hash = window.location.hash.replace('#','');
				for(i=0; i<l; i++){
					if(hash === t.tabs[i].name){ return i }
				}
				return -1;
			}
			var hash = matchHash();
			this.goTo(hash !== -1 ? hash : this.opts.startTab);
			this.opts.initCb ? this.opts.initCb(this) : '';
		},
		layout:function(){
			var t = this;
			this.scroll.width( (t.mask.width()) * t.items.length);
			this.itemW = t.mask.width();
			this.items.each(function(i){
				t.tabs[i] = {ele:$(this),id:this.id,index:i,name:$(this).data().name || false};
			}).css({float:'left'}).width(t.itemW);

			if(this.opts.autosize){
				this.navItems.each(function(i){
					var $t = $(this), m = parseInt($t.parent().css('marginLeft'));
					$t.width( (t.ele.width()/t.items.length) - m ).css({paddingLeft:0,paddingRight:0})
				})
			}
		},
		goTo: function(n){
			var target = this.tabs[n].ele;
			this.index = parseInt(n);
			this.scroll[0].style.left = -this.itemW*this.index+'px';
			this.current = target;
			this.setActive();
			!this.opts.fixed ? this.setHeight(false, this.opts.callback) : '';
		},
		setActive: function(){
			var t = this;
			this.navItems.removeClass('active').filter(':eq('+t.index+')').addClass('active');		
		},
		setHeight: function(h,cb){
			this.current.height('auto');
			var h = h || this.current.height(), t = this;
			this.mask.animate({height:h+'px'},t.opts.speed);
			cb ? cb(this) : '';
		},
		reSize:function(cb){
			this.layout();
			this.goTo(this.index);
			cb ? cb(this) : '';
			//this.setHeight();
		}
	}

	$.fn.tabs = function(opts){
		return this.each(function(){
			$(this).data().tabs = new Tabs($(this),opts);
		});
	}
})(jQuery);