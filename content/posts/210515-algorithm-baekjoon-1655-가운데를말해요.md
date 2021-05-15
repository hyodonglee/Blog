---
slug: "/category/algorithm/baekjoon/1655"
date: "2021-05-15"
title: "[BOJ] 1655. 가운데를 말해요"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "Priority Queue" ]
description: "bfs를 이용하여 거울 설치 최소갯수를 찾는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 우선순위 큐
<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/1655
<br><br>


#### [요구사항]
- 한 줄에 하나씩 N줄에 걸쳐 수빈이의 동생이 말해야하는 수를 순서대로 출력한다.<br><br> 

#### [풀이]

1. 최소힙과 최대힙을 사용한다.<br><br>

2. 힙의 사이즈가 동일하면 최대힙에 넣고 아니면 최소힙에 넣는다.<br><br>

3. 이 때, 최대힙의 최댓값이 무조건 최소힙의 최소값보다 작아야하므로 그렇지 않으면 swap해준다.<br><br>

4. 최대힙의 최댓값을 출력하는 한다.<br><br>

5. 이를 반복한다.<br><br>


#### [처음에 짠 코드]
```java
//baekjoon_1655_가운데를 말해요

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main{
    static int n;
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        n = Integer.parseInt(br.readLine());

        int[] arr = new int[n];
        Arrays.fill(arr, 100001);

        for(int i=0;i<n;i++){
            arr[i] = Integer.parseInt(br.readLine());
            Arrays.sort(arr);
            sb.append(arr[i/2]+"\n");
        }

        System.out.println(sb.toString());
    }
}
```
<br><br>

#### [코드]
```java
//baekjoon_1655_가운데를 말해요

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;

public class Main{
    static int n;
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        n = Integer.parseInt(br.readLine());

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((o1, o2)->o2-o1);
        PriorityQueue<Integer> minHeap = new PriorityQueue<>((o1, o2)->o1-o2);

        for(int i=0;i<n;i++){
            int num = Integer.parseInt(br.readLine());

            if(maxHeap.size()==minHeap.size()) maxHeap.add(num);
            else minHeap.add(num);
            //우선 사이즈가 다르면 무조건 맞춰줘야하기 때문에 일단 값을 어디든 넣는다.

            if(!maxHeap.isEmpty() && !minHeap.isEmpty()){//한쪽이라도 비어있으면 안된다.
                if(maxHeap.peek()>minHeap.peek()){
                    minHeap.add(maxHeap.poll());
                    maxHeap.add(minHeap.poll());
                }
            }
            sb.append(maxHeap.peek() + "\n");
        }
        System.out.println(sb.toString());
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/118353616-19f8d780-b5a2-11eb-84ba-9a88898e3ec3.png)
<br><br>

#### [느낀점]
처음에는 단순히 우선순위 큐 하나만으로 구할 수 있어서 쉽다고 생각했는데, 시간초과와 메모리초과의 문제가 있어서 두 개를 사용해서 구현하는게 신박했다.