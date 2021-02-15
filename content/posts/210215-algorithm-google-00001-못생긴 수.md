---
slug: "/category/algorithm/baekjoon/1715"
date: "2021-02-11"
title: "[BOJ] 1715. 카드 정렬하기"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "sorting", "priority queue" ]
description: "우선순위 큐를 사용하여 끊임없이 정렬하면서 최소 값을 더하는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 소팅


<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/1715
<br><br>


#### [요구사항]

1. 정렬된 숫자묶음 카드를 합쳐서 하나로 만들되 최소한의 횟수로 가능하게 하여아한다.<br><br> 



<br><br>

#### [풀이]

1. 우선순위 큐를 만들고 값들을 저장한다.<br><br>

2. 큐가 empty 상태가 될때 까지 두개씩 꺼내서 합하고 다시 큐에 넣기를 반복한다. 그러면 자동으로 가장 작은 수끼리 계속 더할 수 있다.


<br><br>

#### [코드]
```java
//baekjoon_1715_카드 정렬하기

import java.io.*;
import java.lang.*;
import java.util.*;
public class Main {
    static PriorityQueue<Integer> pq = new PriorityQueue<>();
    static int n;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());

        for(int i=0;i<n;i++)
            pq.add(Integer.parseInt(br.readLine()));

        int value = 0;
        int cnt = 0;
        long ans = 0;
        while(!pq.isEmpty()){
            if(cnt%2==0) value = pq.poll();
            else{
                value+=pq.poll();
                pq.add(value);
                ans+=value;
            }
            cnt++;
        }
        System.out.println(ans);
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/107636857-9c76b000-6cb0-11eb-9a20-6f208d601ab2.png)


<br><br>

#### [느낀점]
처음에는 단순하게 오름차순 소팅 후에 앞에서부터 더해주면 된다고 생각했는데 더했을 때의 수가 그 다음에 더할 수보다 더 커지면 문제가 생긴다는 것을 발견하는 것이 어려웠다.