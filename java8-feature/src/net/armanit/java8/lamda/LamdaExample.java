package net.armanit.java8.lamda;

public class LamdaExample {

    public static void main(String[] args) {
        methodWithNoParam();
        methodWithTwoParam();
        returnMethodWithTwoParams();
    }

    public static void methodWithNoParam() {
        VoidMethodWithNoParam method = () -> {
            System.out.println("Method with no return and input param");
        };

        VoidMethodWithNoParam method1 = () -> System.out.println("Method with no return and input param 1");

        method.printHello();
        method1.printHello();
    }

    public static void methodWithTwoParam() {
        VoidMethodWithTwoParam method = (num1, num2) -> {
            System.out.println("Add of two number " + (num1 + num2));
        };

        method.add(10, 15);
    }

    public static void returnMethodWithTwoParams() {
        ReturnMethodWithTwoParam add = ((num1, num2) -> num1 + num2);
        ReturnMethodWithTwoParam multiply = ((num1, num2) -> num1 * num2);
        ReturnMethodWithTwoParam division = ((num1, num2) -> num1 / num2);

        System.out.println(add.calculate(5, 10));
        System.out.println(multiply.calculate(3, 4));
        System.out.println(division.calculate(12, 5));
    }
}

