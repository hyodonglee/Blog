---
slug: "/category/study/dataprocessing/1"
date: "2021-03-03"
title: "[정보처리기사필기] 1장. 소프트웨어설계-요구사항 확인"
author: "이효동"
categories: ["DataProcessing"]
tags: ["study" , "dataprocessing" ]
description: "정보처리기사 필기 시험 대비를 위한 정리 - 1장.소프트웨어설계(1)"
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [영속성 컨텍스트]
- 영속성 컨텍스트는 논리적인 개념입니다.
- 눈에 보이지 않습니다.
- 엔티티 매니저를 통해서 영속성 컨텍스트에 접근합니다.
<br><br>

#### [엔티티의 생명주기]
- 비영속(new/transient) : 영속성 컨텍스트와 전혀 관게가 없는 새로운 상태<br><br>

<img src="https://user-images.githubusercontent.com/54053016/108305406-3d072b80-71ed-11eb-817c-54a4b108155f.png" style="width:50px, height:50px" ><br><br>

```java
Member member = new Member();
member.setId("member1");
member.setUsername("회원1");
```

코드 예시와 같이 자바에서 단순히 객체만 생성한 상태일 때입니다.<br>

- 영속(managed) : 영속성 컨텍스트에 관리되는 상태<br><br>

<img src="https://user-images.githubusercontent.com/54053016/108305756-0e3d8500-71ee-11eb-9341-2b550175abe8.png" style="width:50px, height:50px"><br><br>

```java
EntityManager em = emf.createEntityManager();
em.getTransaction().begin();

em.persist(member);
```
<br>

객체를 저장한 상태입니다.<br>

- 준영속(detached) : 영속성 컨텍스트에 저장되었다가 분리된 상태
<br><br>

```java
em.detach(member);
```
<br>
detach 메소드를 통해서 엔티티를 영속성 컨텍스트에서 분리할 수 있습니다.

- 삭제(removed) : 삭제된 상태
<br><br>

```java
em.remove(member);
```
<br>
엔티티를 삭제한 상태입니다.
<br>

#### [영속성 컨텍스트의 이점]
- 1차 캐시
- 동일성 보장
- 트랜잭션을 지원하는 쓰기 지연
- 변경 감지(Dirth Checking)
- 지연 로딩(Lazy Loading)
<br>

#### [플러시의 개념과 호출 방법]<br>
플러시는 영속성 컨텍스트의 변경 내용을 데이터베이스에 반영하는 것입니다.<br>
다음과 같은 상황에서 플러시가 발생합니다.<br>
- em.flush() : 강제로 직접 호출하는 경우
- commit : 커밋할 때 자동으로 호출
- JPQL 쿼리 실행 : 플러시 자동으로 호출


 본 게시글은 우아한형제들 김영한님의 강의 '자바 ORM 표준 JPA 프로그래밍 - 기본편'을 들으면서 JPA에 대해 정리한 글입니다.<br>