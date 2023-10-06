package net.armanit.java8;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class PredicateExample {
    public static void main(String[] args) {
        // creating predicate
        Predicate<Integer> isEven = i -> i % 2 == 0;

        // calling predicate method
        System.out.println("Is number 61 is even? " + isEven.test(61));

        Predicate<Integer> isGreaterThan50 = i -> i > 50;

        System.out.println("Is the number 61 is even and greater than 50: " + isGreaterThan50.and(isEven).test(61));

        System.out.println("Is the number 61 is even and greater than 50: " + isGreaterThan50.or(isEven).test(61));

        System.out.println("Is number 61 is odd? : " + isEven.negate().test(61));

        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
        List<Integer> collect = list.stream().filter(isEven).collect(Collectors.toList());
        System.out.println("List of even numbers from given list: " + collect);

        Predicate<String> checkEquality = Predicate.isEqual("ARMAN");
        System.out.println("Is the input string is equal?: " + checkEquality.test("ARMAN"));
    }
}
