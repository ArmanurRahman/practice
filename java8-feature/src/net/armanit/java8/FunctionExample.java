package net.armanit.java8;

import java.util.function.Function;

public class FunctionExample {

    public static void main(String[] args) {
        Function<String, String> convertString = s -> s.toUpperCase();
        System.out.println("The upper case value of the input is: " + convertString.apply("mubeen"));

        Function<String, String> sameValue = Function.identity();

        System.out.println("The value of the given input is: " + sameValue.apply("mubeen"));

        Function<Integer, Integer> multiplyOperation = a -> a * 2;
        multiplyOperation = multiplyOperation.andThen(a -> a * 3);
        System.out.println(multiplyOperation.apply(5));

        Function<Integer, Integer> divisionOperation = i -> i / 2;
        divisionOperation = divisionOperation.compose(i -> i/3);
        System.out.println(divisionOperation.apply(30));
    }


}
