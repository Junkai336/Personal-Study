package exam.ch7;

import java.util.List;

class Cat extends Animal {
    public void catMethod() {
        System.out.println("catmethod");
    }

}

class Animal {
    public void animalMethod() {
        System.out.println("animalMethod");
    }

}

public class Casting {
    public static void main(String[] args) {

        Cat cat = new Cat();
        Animal animal = new Animal();

        Animal animalC = cat;
        // Cat catC = (Cat) Animal; 오류
        // Cat catC = (Cat) animal;

        animalC.animalMethod();
        // animalC.catMethod(); 
        // 자식 메소드 사용 불가

        // catC.animalMethod();
        // catC.catMethod();

        System.out.println("123");

        // 에러발생원인을 모르겠다.

        boolean result1 = animal instanceof Cat;
        boolean result2 = cat instanceof Animal;
        boolean result3 = animalC instanceof Cat;
        boolean result4 = animalC instanceof Animal;
        // boolean result5 = catC instanceof Animal;
        // boolean result6 = catC instanceof Cat;

        System.out.println(result1);
        System.out.println(result2);
        System.out.println(result3);
        System.out.println(result4);
        // System.out.println(result5);
        // System.out.println(result6);
                
                // List list = new Linkedlist();
        
                // list.add(10);
                // list.add(20);
                // list.add(30);
                // list.add(40);
                // list.add(50);
        
                // list.remove(2);
        
                // list.size();

        }
        
    }
