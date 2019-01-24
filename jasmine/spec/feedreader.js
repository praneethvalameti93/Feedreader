$(function() {

  // this is the testing suite for RSS Feed
  describe('RSS Feeds', function() {

    // in this we are tryint to find allFeeds variable is defined or not and also findng empty or not
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    // here we are finding allFeeds must have url fealds and also not empty
    it('allFeeds has the URLs and they are not empty', function() {
      allFeeds.forEach((item) => {
        expect(item.url).toBeDefined();
        expect(item.url.length).not.toBe(0);
      })
    })


    // here we are finding allFeeds must have name fealds and also not empty toBeTruthyis is checking the both the conditions
    it('allFeeds object has Name fields and they are not empty', function() {
      allFeeds.map((item) => {
        expect(item.name).toBeTruthy();
        // expect(item.name.length).not.toBe(0);
      })
    })

  });

  // this is the new test suite for  The menu
  describe("The menu", function() {

    // here we need to find the menu is hiddenby default
    it('menu is hidden by default', () => {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    })

    // in the fallowing we need to find wether the menu shows by clicking and also hides again by clicking the icon
    it('Menu enable & disable', () => {
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    })
  });

  // this is the new test suite for the Initial Entries
  describe("Initial Entries", function() {

    // here wee are finding after loaded it has .entry element within .feed container
    beforeEach((done) => {
      loadFeed(0, done);
    });
    it('after loaded it has .entry element within .feed container', function() {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    })
  });
  // this is the new testing suite for New Feed Selection
  describe("New Feed Selection", function() {

    // below are the two different variables to sttore the initial data an updated data
    var initialEntry;
    var changedEntry;

    beforeEach((done) => {
      loadFeed(0, function() {
        initialEntry = $('.feed').find(allFeeds.url);
        loadFeed(1, function() {
          changedEntry = $('.feed').find(allFeeds.url);
          done();
        });
      });
    });

    // checking initialEntry entry is not equal to changedEntry hence data is modifying
    it('feed is updated, it is different from previous one', () => {
      console.log(changedEntry);
      expect(initialEntry).not.toBe(changedEntry);
    });

  });

}());
