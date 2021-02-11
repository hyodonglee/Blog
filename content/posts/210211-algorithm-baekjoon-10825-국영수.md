---
slug: "/category/algorithm/baekjoon/14888"
date: "2021-02-11"
title: "[BOJ] 10825. 국영수"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "sorting" ]
description: "단순한 소팅문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 소팅


<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/10825
<br><br>


#### [요구사항]

1. 국어 점수가 감소하는 순서로 정렬한다.<br><br> 
2. 국어 점수가 같으면 영어점수가 증가하는 순서로 정렬한다.<br><br> 
3. 국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로 정렬한다.<br><br>
4. 모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 정렬한다.<br><br>

<br>
단순히 조건에 맞추어 소팅을 하면된다.

<br>


<br><br>

#### [풀이]

1. 빈 문자열이면 그대로 출력한다.

2. v에 대해서 재귀적으로 solution 함수를 수행해준다.

3. solution이 수행된 v와 u를 가지고 검사를 하고, 조건에 맞게 합치고 출력한다.

<br><br>

#### [코드]
```java
//baekjoon_10825_국영수

import java.io.*;
import java.lang.*;
import java.util.ArrayList;
import java.util.Collections;


public class Main {
    static int n;
    static ArrayList<Info> students = new ArrayList<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());

        for(int i=0;i<n;i++){
            String[] s = br.readLine().split(" ");
            String name = s[0];
            int kor = Integer.parseInt(s[1]);
            int eng = Integer.parseInt(s[2]);
            int math = Integer.parseInt(s[3]);
            students.add(new Info(name, kor, eng, math));
        }

        Collections.sort(students);
        for(int i=0;i<n;i++){
            System.out.println(students.get(i).name);
        }
    }

    public static class Info implements Comparable<Info>{
        String name;
        int kor;
        int eng;
        int math;

        public Info(String name, int kor, int eng, int math){
            this.name = name;
            this.kor = kor;
            this.eng = eng;
            this.math = math;
        }

        @Override
        public int compareTo(Info o) {
            if(this.kor<o.kor){
                return 1;
            }else if(this.kor == o.kor){
                if(this.eng>o.eng){
                    return 1;
                }else if(this.eng == o.eng){
                    if(this.math<o.math){
                        return 1;
                    }else if(this.math==o.math){
                        return this.name.compareTo(o.name);
                    }
                }
            }
            return -1;
        }
    }
}


```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/107605789-8993b980-6c77-11eb-9942-f9b7d07e8ad9.png)

<br><br>

#### [느낀점]
이 문제가 어려워서 한 것은 아니고 자바의 sorting하는 방법을 익히기 위해서 했는데 이제는 방법을 잊지 않고 잘할 수 있을 것 같다. 안 잊어버리도록 해야겠다.