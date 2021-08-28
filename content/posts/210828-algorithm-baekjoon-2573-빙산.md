---
slug: "/category/algorithm/baekjoon/2573"
date: "2021-08-28"
title: "[BOJ] 2573. 빙산"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "bfs" ]
description: "빙산이 다 녹거나 두 개로 나눠질 때까지의 시간을 구하는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- bfs
<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/2573
<br><br>


#### [요구사항]
- 빙산이 분리되는 최초의 시간을 구한다. 다 녹을 때까지 분리되지 않으면 0을 출력한다.<br><br> 

#### [풀이]

1. bfs 탐색을 사용하는 문제이다.<br><br>

2. 주어진 2차원 배열을 순회하고 bfs로 그룹을 짓는다.<br><br>

3. 그룹이 2개이상되면 그 때의 시간을 출력한다.<br><br>

4. 만약, 빙산이 없을 경우에는 0을 출력한다.<br><br>

5. 빙산이 1개의 그룹을 계속 유지하고 있다면 2번부터 반복한다. <br><br>


#### [코드]
```java
//BOJ_2573_빙산
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    //final
    final static int[] dx = {0, -1, 0, 1};
    final static int[] dy = {1, 0, -1, 0};

    //field
    static int r, c;
    static boolean allZero = false;
    static int[][] ice;
    static boolean[][] visited;

    //main
    public static void main(String[] args) throws IOException {
        init();
        System.out.println(solve());
    }

    public static int solve() {
        int year = 0;
        while (true) {
            if (overTwo()) return year;
            if(allZero) return 0;
            melt();
            year++;
        }
    }

    public static void init() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] s = br.readLine().split(" ");
        r = Integer.parseInt(s[0]);
        c = Integer.parseInt(s[1]);

        //최초의 iceberg 배열 생성
        ice = new int[r][c];
        for (int i = 0; i < r; i++) {
            s = br.readLine().split(" ");

            for (int j = 0; j < c; j++) {
                ice[i][j] = Integer.parseInt(s[j]);
            }
        }
    }

    public static boolean overTwo() {
        visited = new boolean[r][c];
        boolean flag = false;
        int cnt = 0;
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                if (ice[i][j] > 0 && !visited[i][j]) {
                    if(flag) return true;
                    bfs(i, j);
                    cnt++;
                    flag = true;
                }
            }
        }
        if(cnt==0) allZero = true;
        return false;
    }

    public static void melt() {
        int[][] newIce = new int[r][c];
        for(int i=0;i<r;i++){
            for(int j=0;j<c;j++){
                if(ice[i][j]>0){
                    newIce[i][j] = getValue(i, j);
                }
            }
        }

        for(int i=0;i<r;i++){
            System.arraycopy(newIce[i], 0, ice[i], 0, c);
        }
    }

    public static int getValue(int x, int y){
        int zeros = 0;
        for(int i=0;i<4;i++){
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(ice[nx][ny]==0) zeros++;
        }

        int res = ice[x][y] - zeros;
        if(res>=0) return res;
        else return 0;
    }

    public static boolean isBorder(int x, int y) {
        if (x < 0 || y < 0 || x > r - 1 || y > c - 1) return true;
        return false;
    }

    public static void bfs(int x, int y) {
        Queue<Pair> q = new LinkedList();
        q.add(new Pair(x, y));
        visited[x][y] = true;

        while(!q.isEmpty()){
            Pair p = q.poll();

            for(int i=0;i<4;i++){
                int nx = p.x + dx[i];
                int ny = p.y + dy[i];

                if(!isBorder(nx, ny) && ice[nx][ny]>0 && !visited[nx][ny]){
                    q.add(new Pair(nx, ny));
                    visited[nx][ny] = true;
                }
            }
        }
    }

    public static class Pair{
        int x;
        int y;

        Pair(int x, int y){
            this.x = x;
            this.y = y;
        }
    }
}



```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/131213488-6e5b3836-a15e-48c8-aa59-66a800c65446.png)
<br><br>

#### [느낀점]
계속 네이버 부스트캠프를 하느라 시간이 없어서 코테준비를 너무 소홀히 했는데 이제 다시 열심히 해야겠다.