---
slug: "/category/algorithm/baekjoon/11404"
date: "2021-02-15"
title: "[BOJ] 11404. 플로이드"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "FloydWarshall" ]
description: "플로이드 와샬 알고리즘을 그대로 구현하는 기초적인 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 플로이드 와샬


<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/11404
<br><br>


#### [요구사항]

1. 도시와 도시 사이의 최소 거리를 구해 나타낸다.<br><br> 


#### [풀이]

1. 모든 도시사이의 최소거리를 구해야하므로 O(N^3)인 플로이드 와샬 알고리즘을 사용해서 문제의 답을 도출할 수 있다.

2. d라는 2차원 배열을 모두 아주 큰 수로 초기화하고, i=j인 배열 값은 모두 0으로 초기화한다. 또한, 문제에서 도시 i, j 사이의 cost가 중복해서 제시될 수도 있다고 했으므로 둘 중 min값을 받아서 저장하는 것을 원칙으로 한다.

3. 플로이드 와샬 알고리즘(3중 for문)을 사용하여 문제를 해결한다.

<br><br>

#### [코드]
```java
//baekjoon_11404_플로이드

import java.io.*;
import java.lang.*;
public class Main {
    static int n, m;
    static final int INF = 987654321;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());
        m = Integer.parseInt(br.readLine());

        int d[][] = new int[n+1][n+1];
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n;j++){
                if(i==j) d[i][j]=0;
                else d[i][j]=INF;
            }
        }//2차원 배열 d 초기화

        for(int i=0;i<m;i++){
            String[] str = br.readLine().split(" ");
            int a = Integer.parseInt(str[0]);
            int b = Integer.parseInt(str[1]);
            int c = Integer.parseInt(str[2]);
            d[a][b] = Math.min(d[a][b], c);
        }

        for(int k=1;k<=n;k++){
            for(int i=1;i<=n;i++){
                for(int j=1;j<=n;j++){
                    d[i][j]=Math.min(d[i][j], d[i][k]+d[k][j]);
                }
            }
        }

        StringBuilder sb = new StringBuilder();
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n;j++){
                if(d[i][j]>=INF)
                    sb.append("0 ");
                else
                    sb.append(d[i][j]+ " ");
            }
            sb.append("\n");
        }

        System.out.println(sb.toString());
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/107946761-d27ba300-6fd4-11eb-8db8-8aa3e5beb0eb.png)


<br><br>

#### [느낀점]
두 번 틀렸습니다가 떠서 왜 그런지 몰랐는데 stringbuilder를 사용하니 되었다. 이런 print함수와 관련하여 틀린 경험은 정말 오랜만인데 다음에는 당황하지 않고 stringbuilder로 바꿔 봐야겠다.