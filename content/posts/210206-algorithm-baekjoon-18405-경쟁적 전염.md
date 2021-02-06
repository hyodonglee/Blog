---
slug: "/category/algorithm/baekjoon/18405"
date: "2021-02-06"
title: "[BOJ] 18405. 경쟁적 전염"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "bfs"]
description: "탐색을 이용하여 바이러스 전파상황을 구하는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 탐색

<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/18405
<br><br>


#### [요구사항]
![image](https://user-images.githubusercontent.com/54053016/107118448-6c9c6680-68c4-11eb-975e-723657688f13.png)


<br>
문제는 번호가 있는 각 바이러스를 1초마다 정해진 순서대로 퍼지게 하여 S초 이후에 어떤 상황인지 알 수 있도록 요구하고 있다.

- 무조건 1,2,3... 순서로 돌아야한다는 것이 기본적인 bfs와 차이점이다.
<br>


<br><br>

#### [풀이]

1. 기존 bfs문제들의 풀이방법과 유사하지만 처음에 1,2,3... 순서대로 바이러스를 받아서 따로 한번 소팅을 해준다.

2. 소팅이 된 바이러스를 순서대로 큐에 넣고 탐색을 실행하면서 S초가 될때까지 또는 지도가 바이러스로 꽉 찰때까지 반복한다.

3. 마지막에 원하는 위치에 바이러스가 있는지 확인한다.

<br><br>

#### [코드]
```java
//baekjoon_18405_경쟁적전염

import java.io.*;
import java.util.*;

public class Main {
    static int n, k;
    static int sec, res_x, res_y;
    static int[][] map;
    static ArrayList<Virus> list = new ArrayList<>();
    static Queue<Virus> q = new LinkedList<>();
    static int dx[] = {0, -1, 0, 1};
    static int dy[] = {1, 0, -1, 0};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] s = br.readLine().split(" ");
        n = Integer.parseInt(s[0]);
        k = Integer.parseInt(s[1]);

        map = new int[n][n];

        for(int i=0;i<n;i++){
            s = br.readLine().split(" ");
            for(int j=0;j<n;j++){
                int idx = map[i][j]=Integer.parseInt(s[j]);
                if(idx>0){
                    list.add(new Virus(i, j, idx, 0));
                }
            }
        }

        Collections.sort(list, new Comparator<Virus>(){
            @Override
            public int compare(Virus o1, Virus o2){
                return o1.num - o2.num;
            }
        });

        for(int i=0;i<list.size();i++){
            q.add(list.get(i));
        }

        s = br.readLine().split(" ");
        sec = Integer.parseInt(s[0]);
        res_x = Integer.parseInt(s[1])-1;
        res_y = Integer.parseInt(s[2])-1;

        solution(sec);
        System.out.println(map[res_x][res_y]);
    }

    public static void solution(int sec){
        while(!q.isEmpty() && mapEmpty()){
            Virus virus = q.poll();
            if(sec==virus.cnt) return;

            for(int j=0;j<4;j++){
                int nx = virus.x + dx[j];
                int ny = virus.y + dy[j];
                if(inBound(nx, ny) && map[nx][ny]==0){
                    map[nx][ny] = virus.num;
                    q.add(new Virus(nx, ny, virus.num, virus.cnt+1));
                }
            }
        }
    }

    public static boolean mapEmpty(){
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(map[i][j]==0) return true;
            }
        }
        return false;
    }
    public static boolean inBound(int x, int y){
        return x>=0 && y>=0 && x<n && y<n;
    }

    public static class Virus{
        int x;
        int y;
        int num;
        int cnt;

        public Virus(int x, int y, int num, int cnt){
            this.x = x;
            this.y = y;
            this.num = num;
            this.cnt = cnt;
        }
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/107118571-24ca0f00-68c5-11eb-94cf-89c647231347.png)


<br><br>

#### [느낀점]
처음에는 큐를 여러개 만들어야하나 하고 헤매느라, 또 자바의 여러가지 소팅 방법이 익숙하지 않아서 찾아보느라 오래 걸렸다. 코딩에 더 익숙해질 필요가 있다.