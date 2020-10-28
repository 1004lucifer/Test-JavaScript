/**
 * L.TileLayer 확장클래스 생성
 */
L.TileLayer.Kitten = L.TileLayer.extend({
  /**
   * TileLayer의 getTileUrl() 확장메소드 구현
   * https://leafletjs.com/reference-1.7.1.html#tilelayer-gettileurl
   */
  getTileUrl: function(coords) {
    var i = Math.ceil( Math.random() * 4 );
    return "https://placekitten.com/256/256?image=" + i;
  },
  /**
   * L.Layer의 getAttribution() 확장메소드 구현
   * https://leafletjs.com/reference-1.7.1.html#layer-getattribution
   */
  getAttribution: function() {
    return "<a href='https://placekitten.com/attribution.html'>PlaceKitten</a>"
  }
});

/**
 * L.TileLayer에 하위클래스 추가 (플러그인 형식 제작)
 */
L.tileLayer.kitten = function() {
  return new L.TileLayer.Kitten();
}
