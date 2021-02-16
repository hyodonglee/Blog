---
slug: "/category/algorithm/baekjoon/15591"
date: "2021-02-17"
title: "[BOJ] 15591. MooTube"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "bfs" ]
description: "신장트리에 bfs를 응용하여 추천되는 동영상의 갯수를 구하는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 탐색
- 신장트리
<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/15591
<br><br>


#### [요구사항]
- 각 테스트 케이스에 대해 몇 개의 동영상이 출력되는지 구한다.<br><br> 

#### [풀이]

1. N개의 노드에 대해 N-1개의 edge가 존재한다는 점에서 신장트리임을 알 수 있다.<br><br>

2. 주어진 노드에 대해 연결되어 있는 노드를 찾아야함으로 bfs를 이용한다.<br><br>

3. bfs를 이용하되, edge의 최소 cost가 K보다 작으면 결국은 안되기 때문에 발견 즉시 배제시킬 수 있으므로 visited를 굳이 2차원배열로 사용할 필요가 없다.<br><br>

4. 이를 명심하고 bfs를 이용하여 연결된 노드의 갯수를 구할 수 있다.<br><br>

5. 결과를 출력한다.<br><br>


#### [코드]
```java
//baekjoon_15591_MooTube

import java.io.*;
import java.lang.*;
import java.util.*;
public class Main {
    static int n, q;
    static LinkedList<Edge> graph[];
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] s = br.readLine().split(" ");

        n = Integer.parseInt(s[0]);
        q = Integer.parseInt(s[1]);

        graph = new LinkedList[n+1];
        for(int i=0;i<=n;i++){
            graph[i] = new LinkedList<>();
        }

        for(int i=0;i<n-1;i++){
            s = br.readLine().split(" ");
            int start = Integer.parseInt(s[0]);
            int end = Integer.parseInt(s[1]);
            int cost = Integer.parseInt(s[2]);

            graph[start].add(new Edge(cost, end));
            graph[end].add(new Edge(cost, start));
        }

        int cnt;
        StringBuilder sb = new StringBuilder();
        while(q-->0){
            cnt=0;
            s=br.readLine().split(" ");
            int k = Integer.parseInt(s[0]);
            int v = Integer.parseInt(s[1]);
            boolean[] visited = new boolean[n+1];

            Queue<Integer> queue = new LinkedList<>();
            queue.add(v);
            visited[v]=true;

            while(!queue.isEmpty()){
                int idx = queue.poll();
                for(int i=0;i<graph[idx].size();i++){
                    int j=graph[idx].get(i).num;
                    if(!visited[j] && graph[idx].get(i).cost>=k){
                        visited[j]=true;
                        queue.add(j);
                        cnt++;
                    }
                }
            }
            sb.append(cnt+"\n");
        }
        System.out.println(sb.toString());
    }

    public static class Edge{
        int cost;
        int num;

        public Edge(int cost, int num){
            this.cost = cost;
            this.num = num;
        }
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/108081417-4a6cca80-70b4-11eb-8fa5-3fa67030eb39.png)
<br><br>

#### [느낀점]
visited를 당연히 2차원배열로 할 줄 알았는데 아니어서 어려웠다.