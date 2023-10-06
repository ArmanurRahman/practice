package net.armanit.java8.streams;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class SimpleStreams {
    public static void main(String[] args) {
        List<String> departmentList = new ArrayList<>();
        departmentList.add("HR");
        departmentList.add("Develop");
        departmentList.add("Admin");
        departmentList.add("Sales");

        Stream<String> departmentStream = departmentList.stream();
        departmentStream.forEach(System.out::println);

        Stream<String> inStream = Stream.of("Mubeen", "Arman");
        inStream.forEach(System.out::println);

        Stream<String> parallelStream = departmentList.parallelStream();
        parallelStream.forEach(System.out::println);

        Stream<String> emptyStream = Stream.empty();
        emptyStream.forEach(System.out::println);

        Stream.iterate(1, n-> n+1).forEach(System.out::println);
    }
}
