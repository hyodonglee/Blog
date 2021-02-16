---
slug: "/category/algorithm/baekjoon/2887"
date: "2021-02-16"
title: "[BOJ] 2887. 행성 터널"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "union-find" ]
description: "Kruskal 알고리즘을 이용하여 최소신장트리를 만드는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 서로소 집합
- 최소신장트리


<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/2887
<br><br>


#### [요구사항]

1. N개의 행성들을 모두 연결할 수 있는 터널 N-1개를 만드는데 필요한 최소비용을 구하여라.<br><br> 


#### [풀이]

1. union find가 사용되는 Kruskal 알고리즘을 사용하여 최소신장트리를 구현하면 문제를 해결할 수 있다.<br><br>

2. 일반적인 문제와 다르게 x,y,z좌표 모두를 고려해야하는데, 완전히 좌표별로 별개로 생각한다.<br><br>

3. 우선 x,y,z 좌표별로 따로 sorting을 한 다음 비용을 각각 구한다.<br><br>

4. 이후 edge들을 모두 저장하고 cost에 따라 sorting한다.<br><br>

5. N-1개의 터널을 구할 때까지 반복해서 구한다.<br><br>


#### [코드]
```java
//baekjoon_2887_행성 터널

import java.io.*;
import java.lang.*;
import java.util.*;
public class Main {
    static int n;
    static int parent[];
    static int rank[];
    static ArrayList<Info> x = new ArrayList<>();
    static ArrayList<Info> y = new ArrayList<>();
    static ArrayList<Info> z = new ArrayList<>();
    static PriorityQueue<Edge> edges = new PriorityQueue<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] s = br.readLine().split(" ");
        n = Integer.parseInt(s[0]);

        parent = new int[n+1];
        rank = new int[n+1];
        for(int i=0;i<n+1;i++){
            parent[i]=i;
            rank[i]=0;
        }//부모는 모두 자기 자신으로 초기화

        for(int i=0;i<n;i++){
            s = br.readLine().split(" ");
            x.add(new Info(Integer.parseInt(s[0]), i));
            y.add(new Info(Integer.parseInt(s[1]), i));
            z.add(new Info(Integer.parseInt(s[2]), i));
        }

        Collections.sort(x);
        Collections.sort(y);
        Collections.sort(z);

        Info before = x.get(0);
        for(int i=1;i<x.size();i++){
            Info info = x.get(i);
            edges.add(new Edge(info.num-before.num, info.idx, before.idx));
            before = info;
        }

        before = y.get(0);
        for(int i=1;i<y.size();i++){
            Info info = y.get(i);
            edges.add(new Edge(info.num-before.num, info.idx, before.idx));
            before = info;
        }

        before = z.get(0);
        for(int i=1;i<z.size();i++){
            Info info = z.get(i);
            edges.add(new Edge(info.num-before.num, info.idx, before.idx));
            before = info;
        }

        int cnt = 1;
        int total = 0;
        while(cnt<=n-1){
            Edge edge = edges.poll();
            int x = find(edge.x);
            int y = find(edge.y);

            if(x==y) continue;
            union(x, y);
            total+=edge.cost;
            cnt++;
        }
        System.out.println(total);
    }

    public static void union(int x, int y){
        x = find(x);
        y = find(y);

        if(x==y) return;

        if(rank[x]>rank[y]){
            parent[y]=x;
        }else{
            parent[x]=y;
            if(rank[x]==rank[y]){
                rank[y]++;
            }
        }
    }

    public static int find(int x){
        if(parent[x]==x) return x;

        return parent[x]=find(parent[x]);
    }

    public static class Edge implements Comparable<Edge>{
        int cost;
        int x;
        int y;

        public Edge(int cost, int x, int y){
            this.cost = cost;
            this.x = x;
            this.y = y;
        }

        @Override
        public int compareTo(Edge o){
            return this.cost-o.cost;
        }
    }

    public static class Info implements Comparable<Info>{
        int num;
        int idx;

        public Info(int cost, int idx){
            this.num = cost;
            this.idx = idx;
        }

        @Override
        public int compareTo(Info o){
            return this.num - o.num;
        }
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/108010652-b74a7b00-7048-11eb-9876-da3f6b9d8f84.png)

<br><br>

#### [느낀점]
x, y, z 좌표가 모두 따로 있어서 일일히 다 비교해서 최소거리를 구해줘야하나 싶었는데 다 따로 생각하고 넣으면 되어서 신선했다.