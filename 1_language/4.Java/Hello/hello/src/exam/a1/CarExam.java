package exam.a1;

class Car {
    String a = "dd";
    String b;
    String c;

    public Car(String a) {
        this("a8","b","c");
    }
    
    public Car(String a, String b) {
        this("a88","b","c");
    }

    public Car(String a, String b, String c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

public class CarExam {
    public static void main(String[] args) {
        Car car1 = new Car("a");
        Car car2 = new Car("a", "b");
        Car car3 = new Car("a", "b", "c");

        System.out.println(car1.a);
        System.out.println(car2.a);
        System.out.println(car3.a);
    }
}