package net.armanit.java8.optional;

import java.util.NoSuchElementException;
import java.util.Optional;

public class OptionalExample {

    public static void main(String[] args) {
        withJava8();
    }

    public static  void withJava8() {
        String[] strings = new String[10];
        strings[5] = "Arman";

        Optional<String> empty = Optional.empty();
        System.out.println(empty);

        Optional<String> value = Optional.of(strings[5]);
        System.out.println(value.get());

        // We should of() when we are sure that value will present, otherwise go for
        // ofNullable()

        Optional<String> nullValue = Optional.ofNullable(strings[4]);
        System.out.println(nullValue);
        nullValue.ifPresent(System.out::println);
        System.out.println(nullValue.orElse("No value"));

        Optional<String> nonEmptyString = Optional.of("Mubeen");
        Optional<String> emptyString = Optional.empty();

        System.out.println("Non empty optional: " + nonEmptyString.map(String::toUpperCase));
        System.out.println("empty optional " + emptyString.map(String::toUpperCase));

        Optional<Optional<String>> nonEmptyOptionalInput = Optional.of(Optional.of("Arman"));
        System.out.println("Optional value: " + nonEmptyOptionalInput);
        System.out.println("Optional map: " + nonEmptyOptionalInput.map(
                input -> input.map(String::toUpperCase)
        ));

        System.out.println("Optional.flatMap: " + nonEmptyOptionalInput.flatMap(
                input -> input.map(String::toUpperCase)
        ));

        Optional<String> country = Optional.of("Bangladesh");
        Optional<String> emptyCountry = Optional.empty();

        System.out.println(country.filter(c -> c.equals("Bangladesh")));
        System.out.println(country.filter(c -> c.equalsIgnoreCase("bangladesh")));

        if (country.isPresent()) {
            System.out.println("Value available");
        }

        country.ifPresent(c -> System.out.println("available country is " + c));
        emptyCountry.ifPresent(c -> System.out.println("available country is " + c));

        System.out.println(country.orElse("No country data available"));
        System.out.println(emptyCountry.orElse("No country data available"));
        System.out.println(emptyCountry.orElseGet(() -> "No country data available"));
        System.out.println(emptyCountry.orElseThrow(NoSuchElementException::new));

    }
}
