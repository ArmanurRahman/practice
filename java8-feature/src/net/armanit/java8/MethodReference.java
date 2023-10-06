package net.armanit.java8;

import net.armanit.java8.lamda.ArithmeticOperation;
import net.armanit.util.Product;
import net.armanit.util.ProductInterface;

import java.util.ArrayList;
import java.util.List;

public class MethodReference {
    public static void main(String[] args) {
        staticMethodReference();
        instanceMethodObjReference();
        instanceMethodWithClassName();
        constructorReference();
    }

    public static void constructorReference() {
        ProductInterface productLamda = (name, price) -> new Product(name, price);
        Product prodSamsung = productLamda.getProduct("Samsung Galaxy", 1000);
        System.out.println(prodSamsung.toString());

        ProductInterface constructorReference = Product::new;
        Product appleProd = constructorReference.getProduct("Apple Iphone 14", 1200);
        System.out.println(appleProd.toString());
    }

    public static void instanceMethodWithClassName() {
        List<String> departments = new ArrayList<>();
        departments.add("HR");
        departments.add("Dev");
        departments.forEach(d -> System.out.println(d));
        departments.forEach(System.out::println);
    }


    public static void instanceMethodObjReference() {
        ArithmeticOperation operation = (a, b) -> {
            int sum = a + b;
            System.out.println("The sum of the given value using lamda is:" + sum);
            return sum;
        };
        operation.calculation(90, 10);
        MethodReference obj = new MethodReference();
        ArithmeticOperation operation1 = obj::performInstanceAddition;
        operation1.calculation(111, 666);
    }

    public int performInstanceAddition(int a, int b) {
        int sum = a + b;
        System.out.println("The sum of the given value using object method reference is:" + sum);
        return sum;
    }

    public static void staticMethodReference() {
        ArithmeticOperation operation = (a, b) -> {
            int sum = a + b;
            System.out.println("The sum of the given value using lamda is:" + sum);
            return sum;
        };
        operation.calculation(5, 8);
        ArithmeticOperation operation1 = MethodReference::performAddition;
        operation1.calculation(8, 9);

    }

    public static int performAddition(int a, int b) {
        int sum = a + b;
        System.out.println("The sum of the given value using static method reference is:" + sum);
        return sum;
    }
}
