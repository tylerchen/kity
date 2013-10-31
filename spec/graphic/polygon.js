describe("Kity.Polygon", function () {

    var Polyline = require( 'graphic/Polygon' );

    it("无参构造Polygon", function() {

        var polygon = new Polygon();

        expect( polygon.getPathData() ).toBe( "" );
        expect( polygon.getChildren().length ).toBe( 0 );

    });

    it("点集合构造Polygon", function() {

        var polygon = new Polygon( [ {
            x: 3,
            y: 2
        }, {
            x: 4,
            y: 2
        } ] );

        expect( polygon.getPathData() ).not.toBe( "" );
        expect( polygon.getChildren().length ).toBe( 2 );

    });

    it("child操作验证", function() {

        var polygon = new Polygon();

        polygon.addChild( new Point( 3, 2 ) );
        expect( polygon.getPathData() ).not.toBe( "" );
        expect( polygon.getChildren().length ).toBe( 1 );
        polygon.removeChild( 0 );
        expect( polygon.getPathData() ).toBe( "" );
        expect( polygon.getChildren().length ).toBe( 0 );

    });

});