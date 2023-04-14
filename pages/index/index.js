Page({
  data: {
    menuOpen: false
  },
  toggleMenu: function() {
    console.log("Antes de cambiar menuOpen:", this.data.menuOpen);
    this.setData({
      menuOpen: !this.data.menuOpen
    });
    console.log("Después de cambiar menuOpen:", this.data.menuOpen);
    console.log("Valor de !menuOpen:", !this.data.menuOpen);
  }
});
