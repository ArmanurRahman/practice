package net.armanit.java8.streams;

import net.armanit.util.Product;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamOperation {
    public static void main(String[] args) {
        mapInStreams();
        flatmapInStream();
        filterStream();
        traverseOnceInStream();
        limitStream();
        skipStream();
        reduceInStream();
        maxInStream();
        collectStream();
        collectingAndThenStream();
        groupingByStream();
        partitioningByStreams();
        parallelStream();
        streamPipeline();
    }

    public static void streamPipeline() {
        List<Integer> inputNums = new ArrayList<>();
        inputNums.add(5);
        inputNums.add(2);
        inputNums.add(11);
        inputNums.add(7);
        inputNums.add(4);
        inputNums.add(13);
        inputNums.add(9);

        List<Integer> newNums = inputNums.stream().filter(num -> num % 2 != 0).map(num -> num*num).sorted()
                .collect(Collectors.toList());
        newNums.forEach(System.out::println);
    }
    public static void parallelStream() {
        System.out.println("Parallel stream");
        List<String> departmentList = new ArrayList<>();
        departmentList.add("Supply");
        departmentList.add("HR");
        departmentList.add("Sales");
        departmentList.add("Marketing");
        departmentList.add("Insurance");
        departmentList.add("Security");
        departmentList.add("Finance");

        departmentList.parallelStream().forEach(System.out::println);
    }
    public static void partitioningByStreams() {
        List<Product> productList = Arrays.asList(new Product("Apple", 1200), new Product("Samsung", 1000),
                new Product("Nokia", 800), new Product("BlackBerry", 1000), new Product("Apple Pro Max", 1500),
                new Product("Mi", 800), new Product("OnePlus", 1000));

        Map<Boolean, List<Product>> costlyProducts = productList.stream()
                .collect(Collectors.partitioningBy(product -> product.getPrice() > 1000));
        System.out.println("The list of products partitioned by price is: " + costlyProducts);
    }
    public static void groupingByStream() {
        System.out.println("grouping in stream");
        List<Product> productList = Arrays.asList(new Product("Apple", 1200), new Product("Samsung", 1000),
                new Product("Nokia", 800), new Product("BlackBerry", 1000), new Product("Apple Pro Max", 1500),
                new Product("Mi", 800), new Product("OnePlus", 1000));

        Map<Integer, List<Product>> groupByPriceMap = productList.stream()
                .collect(Collectors.groupingBy(Product::getPrice));
        System.out.println("The list of products grouped by price is: " + groupByPriceMap);
    }

    public static void collectingAndThenStream() {
        System.out.println("Collecting and then");
        List<Product> productList = Arrays.asList(new Product("Apple", 1200), new Product("Samsung", 1000),
                new Product("Nokia", 800), new Product("BlackBerry", 1000), new Product("Apple Pro Max", 1500),
                new Product("Mi", 800), new Product("OnePlus", 1000));
        String maxPriceProduct = productList.stream()
                .collect(Collectors.collectingAndThen(Collectors.maxBy(Comparator.comparing(Product::getPrice)),
                        (Optional<Product> product) -> product.isPresent() ? product.get().getName() : "None"));
        System.out.println(maxPriceProduct);
    }
    public static void collectStream() {
        System.out.println("Collect stream");
        List<String> departmentList = new ArrayList<>();
        departmentList.add("Supply");
        departmentList.add("HR");
        departmentList.add("Sales");
        departmentList.add("Marketing");
        Stream<String> depStream = departmentList.stream();
        List<String> newDepartmentList = depStream.filter( word -> word.startsWith("S")).collect(Collectors.toList());
        newDepartmentList.forEach(System.out::println);
    }
    public static void limitStream() {
        System.out.println("Limit in stream");
        Stream.generate(new Random()::nextInt).limit(10).forEach(System.out::println);
    }

    public static void skipStream() {
        System.out.println("Skip in stream");
        Stream.iterate(1, n ->1 + n).skip(10).limit(20).forEach(System.out::println);
    }

    public static void reduceInStream() {
        System.out.println("Reduce in stream");
        System.out.println(Stream.iterate(1, n -> n+1).limit(10).reduce(0, (a, b) -> a+b));
    }
    public static void maxInStream() {
        System.out.println("Max in stream");
        System.out.println(Stream.iterate(1, n -> n+1).limit(20).max((a, b) -> a + b));
    }
    public static void mapInStreams() {
        System.out.println("Map in Stream");
        List<String> departmentList = new ArrayList<>();
        departmentList.add("HR");
        departmentList.add("Develop");
        departmentList.add("Admin");
        departmentList.add("Sales");
        departmentList.stream().map(word -> word.toUpperCase()).forEach(System.out::println);
    }

    public static void flatmapInStream() {
        System.out.println("Flatmap in stream");
        String[] arrayOfWords = {"Mubeen", "Arman"};
        Stream<String> streamWord = Arrays.stream(arrayOfWords);
//        streamWord.map(word -> word.split("")).flatMap(Arrays::stream).forEach(System.out::println);

        Stream<String[]> streamLetter = streamWord.map(word -> word.split(""));
        streamLetter.flatMap(Arrays::stream).forEach(System.out::println);

        List<List<String>> list = Arrays.asList( Arrays.asList("Mubeen"),
                Arrays.asList("Arman"));
        System.out.println(list);
        list.stream().map(Collection::stream).forEach(System.out::println);
        list.stream().flatMap(Collection::stream).forEach(System.out::println);
    }

    public static void filterStream() {
        System.out.println("filter in Stream");
        List<String> departmentList = new ArrayList<>();
        departmentList.add("HR");
        departmentList.add("Develop");
        departmentList.add("Admin");
        departmentList.add("Sales");
        departmentList.stream().filter(word -> word.startsWith("S")).forEach(System.out::println);
    }

    public static void traverseOnceInStream() {
        try {
            System.out.println("traverse in Stream");
            List<String> departmentList = new ArrayList<>();
            departmentList.add("HR");
            departmentList.add("Develop");
            departmentList.add("Admin");
            departmentList.add("Sales");
            Stream<String> deptStream = departmentList.stream();
            deptStream.forEach(System.out::println);
            deptStream.forEach(System.out::println); // it will throw error, stream can only traverse once
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }
}
