---
slug: "/category/study/SpringJPA/1"
date: "2021-02-17"
title: "[JPA] 1. Spring JPA 기초"
author: "이효동"
categories: ["SpringJPA"]
tags: ["study" , "jpa" ]
description: "Hello JPA - 애플리케이션 개발"
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [JPA 구동 방식]
![image](https://user-images.githubusercontent.com/54053016/108169493-2359db80-713c-11eb-9cd9-84d64f661566.png)
<br><br>

JPA는 그림과 같이 작동하는 것을 기본으로 합니다.<br>
Persistence가 EntityManagerFactory를 생성합니다.<br>
EntityManagerFactory는 여러개의 EntityManager를 생성합니다.<br><br>

코드로 간단하게 나타내면 아래와 같습니다.<br><br>

```java
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");
        EntityManager em = emf.createEntityManager();
```
<br><br>

#### [JPQL]
- JPA를 사용하면 엔티티 객체를 중심으로 개발()
- 문제는 검색 쿼리
- 검색을 할 때도 테이블이 아닌 엔티티 객체를 대상으로 검색

즉, SQL은 DB 테이블 자체를 대상으로 한 쿼리라서 DB종류에 따른 종속성이 있지만, JPQL은 엔티티 객체를 대상으로한 쿼리이기 때문에 DB종류가 H2, Oracle과 같이 바뀌더라도 거의 수정없이 의도대로 DB를 컨트롤 할 수 있습니다.<br><br>

#### [트랜잭션 단위 코딩]
DB는 기본적으로 트랜잭션 단위로 명령을 처리하기 때문에 JPA 역시 트랜잭션 단위로 코딩을 해야합니다. 굳이 트랜잭션 단위로 하지 않아도 작동이 될 수도 있겠지만 내부적으로는 결국 트랜잭션이 한 단위이기 때문에 코딩을 할 때에도 commit, rollback 등을 생각해서 코딩을 해야합니다.<br><br>


 본 게시글은 우아한형제들 김영한님의 강의 '자바 ORM 표준 JPA 프로그래밍 - 기본편'을 들으면서 JPA에 대해 정리한 글입니다.<br>