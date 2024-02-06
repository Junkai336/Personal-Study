package exam.a1;

class Parent {
    public int a = 1;

    public void papa() {
        System.out.println("부모메소드");
    }
}

class Child extends Parent {
    public int b = 2;

    public void chch() {
        System.out.println("자식메소드");
    }
}

public class DownCasting {
    public static void main(String[] args) {

        Parent parent = new Child();
        Child child = (Child) parent;

        parent.papa();
        // parent.chch();

        child.papa();
        child.chch();

        System.out.println("dd");
    }
}
