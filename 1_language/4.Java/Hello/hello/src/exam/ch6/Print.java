package exam.ch6;

public class Print {

    public void println(String text) {
        // text = Integer.parseInt("2");
        System.out.println(text);
    }

    public void println(int text) {
        System.out.println(text);
    }

    public void println(double text) {
        System.out.println(text);
    }

    public void println(boolean text) {
        System.out.println(text);
    }

    public static void main(String[] args) {
        Print print = new Print();

        print.println(10);
        print.println("10");
        print.println(1.2);
        print.println(false);
    }
}
