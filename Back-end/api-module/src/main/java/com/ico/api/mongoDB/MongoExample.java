// TODO : 프로젝트가 실행 될때 마다 실행되기 때문에 고칠 때만 주석 풀고 고치고 실행 한 뒤에 다시 주석처리 하기!
//package com.ico.api.mongoDB;
//
//import com.ico.core.code.TaxType;
//import com.mongodb.client.MongoCollection;
//import com.mongodb.client.MongoDatabase;
//import org.bson.Document;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.stereotype.Component;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//import java.util.stream.Collectors;
//import java.util.stream.IntStream;
//
//@Component
//public class MongoExample implements CommandLineRunner {
//
//    @Autowired
//    private MongoTemplate mongoTemplate;
//
//    @Override
//    public void run(String... args) throws Exception {
//        // MongoDB 접속
//        MongoDatabase database = mongoTemplate.getDb();
//
//        List<Document> jobDocuments = new ArrayList<>();
//
//        List<String> jobList = Arrays.asList("소방관", "급식", "경찰");
//        List<String> detailList = Arrays.asList("소화기", "급식 당번", "벌금 징수");
//        List<String> imageList = Arrays.asList("url", "url", "url");
//        List<Integer> wageList = Arrays.asList(13, 10, 11);
//        List<Integer> creditList = Arrays.asList(6, 5, 1);
//        List<Integer> countList = Arrays.asList(0, 0, 0);
//        List<Integer> totalList = Arrays.asList(1, 5, 2);
//        List<String> colorList = Arrays.asList("레드", "#FF8B4A", "#FF8B4A");
//
//        for (int i = 0; i < jobList.toArray().length; i++){
//
//            // 직업 데이터 삽입
//            Document jobDocument = new Document("_id", i + 1)
//                    .append("title", jobList.get(i))
//                    .append("detail", detailList.get(i))
//                    .append("image", imageList.get(i))
//                    .append("wage", wageList.get(i))
//                    .append("credit_rating", creditList.get(i))
//                    .append("count", countList.get(i))
//                    .append("total", totalList.get(i))
//                    .append("color", colorList.get(i));
//            jobDocuments.add(jobDocument);
//        }
//        MongoCollection<Document> jobCollection = database.getCollection("job");
//        jobCollection.insertMany(jobDocuments);
//
//        // 이자율 데이터 삽입
//        Document interestDocument = new Document("_id", 1)
//                .append("credit_rating", IntStream.rangeClosed(1, 10).boxed().collect(Collectors.toList()))
//                .append("short_period", Arrays.asList(15, 12, 10, 8, 6, 5, 4, 3, 0, 0))
//                .append("long_period", Arrays.asList(40, 35, 30, 26, 22, 19, 16, 13, 10, 10));
//
//        MongoCollection<Document> interestCollection = database.getCollection("interest");
//        interestCollection.insertOne(interestDocument);
//
//        // 국세목록 데이터 삽입
//        Document taxDocument = new Document("_id", 1)
//                .append("title", Arrays.asList("자리세", "소득세", "전기세"))
//                .append("amount", Arrays.asList(10, 10, 10))
//                .append("type", Arrays.asList(TaxType.PERCENT, TaxType.INT, TaxType.INT));
//
//        MongoCollection<Document> taxCollection = database.getCollection("tax");
//        taxCollection.insertOne(taxDocument);
//    }
//}
