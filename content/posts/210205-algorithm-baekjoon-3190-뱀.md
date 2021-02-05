---
slug: "/category/algorithm/snake"
date: "2021-02-05"
title: "[BOJ] 3190. 뱀"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "simulation", "samsung"]
description: "삼성SW 역량테스트 기출문제 - 뱀 "
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 구현
- 시뮬레이션
<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/3190
<br><br>


#### [요구사항]
![image](https://user-images.githubusercontent.com/54053016/106916633-bd884f80-674a-11eb-86b5-aef584878448.png)
<br>
문제는 기둥과 보를 조건에 맞게 설치하기를 요구하고 있다.

- 기둥은 바닥 위에 있거나 보의 한쪽 끝 부분 위에 있거나, 또는 다른 기둥 위에 있어야 한다.
- 보는 한쪽 끝 부분이 기둥 위에 있거나, 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어야 한다.
<br>


<br><br>

#### [풀이]

1) n의 크기나 build_frame의 크기가 그리 크지 않으므로 주어진 문제를 조건에 맞게 '구현'하면 된다고 판단하였다.

2) 기둥과 보를 각각 따로 2차원 배열로 생성하여 설치 유무를 판단할 수 있게 한다.

3) 설치, 삭제 경우를 나눈다.

4) 설치의 경우에서는 기둥일 때와 보 일때 각각 조건을 검사하여 설치를 진행한다.

5) 삭제의 경우에는 우선 삭제하고 모든 기둥과 보가 설치조건을 만족하는지를 따져서 조건 만족 시 그대로 두고, 조건을 만족하지 않으면 다시 되돌린다.

6) 모든 작업이 완료되면 순서대로 answer 배열에 넣는다.

<br><br>

#### [코드]
```java
//baekjoon_3190_뱀

import java.io.*;
import java.util.*;

public class Main {
    static final int APPLE = 2;
    static final int SNAKE = 1;
    static final int L = 1;
    static final int R = -1;
    static final int MAX = 101;

    static int n, k, m;
    static int map[][];
    static int[] dx = {0, -1, 0, 1};
    static int[] dy = {1, 0 ,-1, 0};
    static int dir = 0;

    static Deque<Pair> snakes = new LinkedList<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] s = br.readLine().split(" ");

        n = Integer.parseInt(s[0]);
        map= new int[n][n];

        s = br.readLine().split(" ");
        k = Integer.parseInt(s[0]);

        for(int i=0;i<k;i++){
            s = br.readLine().split(" ");

            int x = Integer.parseInt(s[0])-1;
            int y = Integer.parseInt(s[1])-1;

            map[x][y]=APPLE;
        }//사과받기

        s = br.readLine().split(" ");
        m = Integer.parseInt(s[0]);

        snakes.add(new Pair(0, 0));
        map[0][0]=SNAKE;
        int time = 1;
        for(int i=0;i<m;i++){
            s = br.readLine().split(" ");
            int sec = Integer.parseInt(s[0]);
            char d = s[1].charAt(0);

            if(d=='L') time = move(sec, time, L);
            else time = move(sec, time, R);
        }

        time = move(MAX, time, dir);

        System.out.println(time);
    }

    public static int move(int sec, int time, int direction){
        int i;
        for(i=time;i<=sec;i++){
            Pair head = snakes.peek();
            int nx = head.x+dx[dir];
            int ny = head.y+dy[dir];

            if(!inBound(nx, ny)) return i;
            if(map[nx][ny]==SNAKE) return i;

            snakes.addFirst(new Pair(nx, ny));
            if(map[nx][ny]!=APPLE){
                Pair tail = snakes.pollLast();
                map[tail.x][tail.y]=0;
            }
            map[nx][ny] = SNAKE;

        }//sec까지
       dir = (dir+direction+4)%4;

        return i;
    }

    public static boolean inBound(int x, int y){
        return x>=0 && y>=0 && x<n && y<n;
    }

    public static class Pair{
        int x;
        int y;

        public Pair(int x, int y){
            this.x = x;
            this.y = y;
        }
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/107047651-672f1580-680b-11eb-99a5-eede839fda43.png)
<br><br>

#### [느낀점]
골드5라서 할만했지만 난이도가 어려워지면 구현이 더 오래걸릴 것 같다.

