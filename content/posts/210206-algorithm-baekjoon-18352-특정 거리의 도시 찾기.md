---
slug: "/category/algorithm/findcity"
date: "2021-02-06"
title: "[BOJ] 18352. 특정 거리의 도시 찾기"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "bfs"]
description: "특정 거리의 도시찾기라는 문제는 탐색을 이용하여 최단거리를 구하는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 탐색

<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/18352
<br><br>


#### [요구사항]
![image](https://user-images.githubusercontent.com/54053016/107113956-a447e600-68a5-11eb-8f62-a22ed521f4e0.png)

<br>
문제는 정해진 도시로부터 최단거리가 K인 도시를 구하기를 요구하고 있다.

- 최단 거리가 K인 것이 중요하다.
<br>


<br><br>

#### [풀이]

1. "최단 거리"라는 말이 나오면 가장 먼저 떠올려야 하는 것은 bfs 탐색기법이다<br><br>
2. 이를 적용하여 시작 도시 X를 기준으로 bfs를 수행하여 최단거리를 저장하였다.<br><br>
3. 탐색이 모두 끝나면 최단거리가 K인 도시들만 골라서 출력해준다.

<br><br>

#### [코드]
```java
//baekjoon_18352_특정 거리의 도시 찾기

import java.io.*;
import java.util.*;

public class Main {
    static int n, m, k, x;
    static LinkedList<Integer> graph[];
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] s = br.readLine().split(" ");
        n = Integer.parseInt(s[0]);
        m = Integer.parseInt(s[1]);
        k = Integer.parseInt(s[2]);
        x = Integer.parseInt(s[3]);

        graph = new LinkedList[n+1];
        for(int i=0;i<n+1;i++){
            graph[i] = new LinkedList<>();
        }

        for(int i=0;i<m;i++){
            s = br.readLine().split(" ");
            int a = Integer.parseInt(s[0]);
            int b = Integer.parseInt(s[1]);

            graph[a].add(b);
        }//graph 생성

        ArrayList<Integer> answer = bfs();

        if(answer.size()==0) {
            System.out.println(-1);
            return;
        }
        for(int i=0;i<answer.size();i++){
            System.out.println(answer.get(i));
        }
    }

    public static ArrayList<Integer> bfs(){
        int list[] = new int[n+1];
        ArrayList<Integer> answer = new ArrayList<>();
        Queue<Integer> q = new LinkedList<>();
        boolean visited[] = new boolean[n+1];
        for(int i=0;i<n+1;i++)
            visited[i]=false;

        q.add(x);
        visited[x]=true;
        while(!q.isEmpty()){
            int idx = q.poll();
            int cnt = list[idx];
            for(int i=0;i<graph[idx].size();i++){
                int j = graph[idx].get(i);
                if(!visited[j]){
                    visited[j]=true;
                    q.add(j);
                    list[j] = cnt+1;
                }
            }
        }

        for(int i=0;i<list.length;i++){
            if(list[i]==k)
                answer.add(i);
        }
        return answer;
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/107114063-76af6c80-68a6-11eb-8e1a-c2a9a55fb63e.png)

<br><br>

#### [느낀점]
탐색을 오랜만에 풀어서 그런지 dfs로 처음에 했었는데 '최단거리'하면 다익스트라와 같은 알고리즘을 적용해야 겠다는 생각이 바로 들게 연습하는 것이 중요한 것 같다.
그리고 자바는 내용이 간단함에도 불구하고 코드량이 너무 길다..