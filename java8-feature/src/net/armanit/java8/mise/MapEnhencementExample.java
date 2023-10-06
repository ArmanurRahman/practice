package net.armanit.java8.mise;

import java.util.HashMap;
import java.util.Map;

public class MapEnhencementExample {
    public static void main(String[] args) {
        mapEnhancements();
    }

    public static void mapEnhancements() {
        Map<String, String> map = new HashMap<>();
        map.put("Bangladesh", "Dhaka");
        map.put("USA", "Washington");
        map.put("Japan", "Tokyo");
        map.put("China", "Beijing");
        map.put("Germany", "Berlin");
        map.put("England", "London");

        map.forEach((country, capital) -> System.out.println("The capital of " + country + " is " + capital));

        map.entrySet().stream().sorted(Map.Entry.comparingByKey()).forEach(System.out::println);
        map.entrySet().stream().sorted(Map.Entry.comparingByValue()).forEach(System.out::println);

        System.out.println(map.getOrDefault("Russia", "No Data Present"));

        map.computeIfAbsent("Spain", name -> "Madrid");
        map.computeIfPresent("USA", (k, v) -> "Washington DC");
        map.compute("India", (key, val) -> "New " + val);
        map.remove("England", "London");
        map.replaceAll((country, capital) -> capital.toUpperCase());
        map.replace("India", "Delhi");
        map.entrySet().stream().sorted(Map.Entry.comparingByValue()).forEachOrdered(System.out::println);
    }
}
