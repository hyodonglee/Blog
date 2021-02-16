---
slug: "/category/algorithm/baekjoon/1717"
date: "2021-02-16"
title: "[BOJ] 1717. 집합의 표현"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "union-find" ]
description: "서로소 집합의 가장 기본적인 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 서로소 집합


<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/1717
<br><br>


#### [요구사항]

1. 각 index를 집합원소로 가지고 있는 노드들에 대하여 합집합 했을 때 같은 집합에 속하는지 알아내기<br><br> 


#### [풀이]

1. union find를 그대로 구현하여 문제를 해결할 수 있다.<br><br>

2. 핵심은 union을 할 때 rank가 높은 쪽으로 붙이는 최적화 작업을 하는 것이다.<br><br>


#### [코드]
```java
//baekjoon_1717_집합의 표현

import java.io.*;
import java.lang.*;
public class Main {
    static int n, m;
    static int parent[];
    static int rank[];
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] s = br.readLine().split(" ");
        n = Integer.parseInt(s[0]);
        m = Integer.parseInt(s[1]);

        parent = new int[n+1];
        rank = new int[n+1];
        for(int i=0;i<n+1;i++){
            parent[i]=i;
            rank[i]=0;
        }//부모는 모두 자기 자신으로 초기화

        for(int i=0;i<m;i++){
            s = br.readLine().split(" ");
            int stat = Integer.parseInt(s[0]);
            int a = Integer.parseInt(s[1]);
            int b = Integer.parseInt(s[2]);

            if(stat==0){
                union(a,b);
            }else{
                if(isSame(a,b)) System.out.println("YES");
                else System.out.println("NO");
            }
        }
    }
    public static void union(int x, int y){
        x = find(x);
        y = find(y);

        if(x==y)
            return;

        if(rank[x]<rank[y]){
            parent[x]=y;
        }else if(rank[x]>rank[y]){
            parent[y]=x;
        }else{
            parent[x]=y;
            rank[y]++;
        }
    }

    public static int find(int x){//find하면서 거치는 노드들의 부모를 모두 최상위 노드로 변경
        if(parent[x]==x){
            return x;
        }
        return parent[x]=find(parent[x]);
    }

    public static boolean isSame(int x, int y){
        x=find(x);
        y=find(y);
        if(parent[x]==parent[y]) return true;
        return false;
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/107962032-e54ca280-6fe9-11eb-9bb3-c7bfa986adb7.png)
<br><br>

#### [느낀점]
서로소 집합 역시 오랜만에 풀어봐서 다시 어떻게 푸는지 기억할 겸 풀어보았는데 원리는 아주 간단하였다.