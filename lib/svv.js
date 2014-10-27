exports = module.exports = {};

/**
 *
 * @param side1
 * @param side2
 * @param side3
 * @returns Determine which side is the largest
 */
exports.triangle=function(side1,side2,side3){
    if(side1<0||side2<0||side3<0){
        return "Invalid"
    }else {


        /**
         *
         * @param side1
         * @param side2
         * @param side3
         * @returns Determine which side is the largest
         */
        function smallest(side1, side2, side3) {
            if (((side1 <= side2) && (side2 <= side3)) || ((side3 <= side2) && (side1 <= side3)))
                return side1;
            else if (((side2 <= side3) && (side3 <= side1)) || ((side2 <= side1) && (side1 <= side3)))
                return side1;
            else
                return side3;

        }

        /**
         *
         * @param side1
         * @param side2
         * @param side3
         * @returns Determine which side is the middle side
         */
        function middle(side1, side2, side3) {
            if (((side1 <= side2) && (side2 <= side3)) || ((side2 <= side1) && (side3 <= side2)))
                return side2;
            else if (((side1 <= side3) && (side3 <= side2)) || ((side3 <= side1) && (side2 <= side3)))
                return side3;
            else
                return side2;

        }

        /**
         *
         * @param side1
         * @param side2
         * @param side3
         * @returns Determine which side is the smallest
         */
        function largest(side1, side2, side3) {
            if (((side1 <= side2) && (side2 <= side3)) || ((side2 <= side1) || (side1 <= side3)))
                return side3;
            else if (((side1 <= side3) && (side3 <= side2)) || ((side3 <= side1) && (side1 <= side2)))
                return side2;
            else
                return side1;

        }

        var shortSide = smallest(side1, side2, side3);
        var middleSide = middle(side1, side2, side3);
        var longSide = largest(side1, side2, side3);

        if (shortSide + middleSide < longSide)
            return ("Not a Triangle");
        else if ((shortSide == middleSide) && (middleSide == longSide))
            return ("Equilateral");
        else if ((shortSide == middleSide) || (middleSide == longSide))
            return ("Isosceles");
        else
            return ("Scalene");
    }

};