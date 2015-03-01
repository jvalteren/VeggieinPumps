/**
 * Excerpt from cbpGridGallery.js v1.0.0
 * http://www.codrops.com
 * Removed everything related to the slideshow functionality.
 */
;( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function GridGallery( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	GridGallery.prototype.options = {
	};

	GridGallery.prototype._init = function() {
		// main grid
		this.grid = this.el.querySelector( 'section.grid-wrap > ul.grid' );
		// main grid items
		this.gridItems = [].slice.call( this.grid.querySelectorAll( 'li:not(.grid-sizer)' ) );
		// items total
		this.itemsCount = this.gridItems.length;
		// init masonry grid
		this._initMasonry();
	};

	GridGallery.prototype._initMasonry = function() {
		var grid = this.grid;
		imagesLoaded( grid, function() {
			new Masonry( grid, {
				itemSelector: 'li',
				columnWidth: grid.querySelector( '.grid-sizer' )
			});
		});
	};

	// add to global namespace
	window.GridGallery = GridGallery;

})( window );
