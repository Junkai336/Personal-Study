package Chapter1;

public class ch2 {
    public static void main(String[] args) {
        int x = 1000000;
        // long y = 1000000;
        int y = 1000000;
        // long xy = x * y;
        long xy = (long) x * y;
        System.out.println(xy);

        int xx = 100;
        long yy = 100L;
        // int xxyy = xx + yy; // 에러
    }
}

/* 
 
 */