---
slug: "/category/algorithm/programmers/60063"
date: "2021-02-11"
title: "[Programmers] 60063. 블록 이동하기"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "programmers", "bfs", "kakao"]
description: "bfs 탐색을 사용하여 주어진 조건에 따라 (n,n)까지 도달하는 시간을 구하는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 탐색

<br><br>

#### [문제링크]
- https://programmers.co.kr/learn/courses/30/lessons/60063
<br><br>


#### [요구사항]

1. (1,1), (1,2) 칸을 차지하고 있는 로봇이 (n,n)까지 도착하는데 걸리는 시간을 구해야 합니다.<br><br> 



#### [풀이]

1. 일반적인 bfs문제와 동일하게 접근하면 되지만 조건을 코딩하는 것이 까다롭다.<br><br>

2. 로봇의 두 칸중 하나를 기본 좌표로 잡고 class 정보에 dir를 추가하여 다른 좌표 하나를 유추할 수 있게끔 한다.<br><br>

3. 우선 상하좌우는 보통 문제와 비슷하게 한다.
<br><br>

4. 까다로운 것은 회전인데, 로봇의 두 점 중 각 점을 기준으로 잡고 왼쪽으로 회전할 때와 오른쪽으로 회전할 때를 모두 검사하여 queue에 넣는 방식으로 한다.<br><br>

#### [코드]
```java
//programmers_60063_블록 이동하기

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main {
    final static int dx[] = {0, -1, 0, 1};
    final static int dy[] = {1, 0, -1, 0};
    final static int drx[] = {1, -1, -1, 1};
    final static int dry[] = {1, 1, -1, -1};
    static int n;
    public static void main(String[] args) throws IOException {
        int board[][] = {
                {0,0,0,1,1},
                {0,0,0,1,0},
                {0,1,0,1,1},
                {1,1,0,0,1},
                {0,0,0,0,0}
        };
        System.out.println(solution(board));
    }

    public static int solution(int[][] board) {
        n = board.length;
        boolean visited[][][] = new boolean[n][n][4];
        Queue<Robot> q = new LinkedList<>();
        visited[0][0][0] = true;
        q.add(new Robot(0, 0, 0, 0));

        return bfs(q, visited, board);
    }

    public static int bfs(Queue<Robot> q, boolean[][][] visited, int[][] board){
        int x, y, dir, cnt, ox, oy;
        int nx, ny, nox, noy, ndir;
        int rx, ry;

        while(!q.isEmpty()){
            Robot robot = q.poll();

            x = robot.x;
            y = robot.y;
            dir = robot.dir;
            cnt = robot.cnt;
            ox = robot.x + dx[dir];
            oy = robot.y + dy[dir];

            if(isFinish(x,y) || isFinish(ox, oy)) return cnt;

            for(int i=0;i<4;i++){//상하좌우 이동
                nx = x + dx[i];
                ny = y + dy[i];
                nox = ox + dx[i];
                noy = oy + dy[i];

                if(!inBound(nx, ny) || !inBound(nox, noy)) continue;
                if(board[nx][ny]==1 || board[nox][noy]==1) continue;
                if(visited[nx][ny][dir]) continue;

                visited[nx][ny][dir]=true;
                q.add(new Robot(nx, ny, dir, cnt+1));
            }

            for(int i=1;i<4;i+=2){//90도 회전 x,y기준
                ndir = (dir + i)%4;
                nox = x+dx[ndir];
                noy = y+dy[ndir];

                int tempDir = (i==1) ? ndir:dir;
                rx = x + drx[tempDir];
                ry = y + dry[tempDir];

                if(!inBound(nox, noy) || !inBound(rx, ry)) continue;
                if(board[nox][noy] == 1 || board[rx][ry]==1) continue;
                if(visited[x][y][ndir]) continue;

                visited[x][y][ndir] = true;
                q.add(new Robot(x, y, ndir, cnt+1));
            }

            dir = (dir+2)%4;
            for(int i=1;i<4;i+=2){//90도 회전 , ox, oy기준
                ndir = (dir + i)%4;
                nx = ox+dx[ndir];
                ny = oy+dy[ndir];

                int tempDir = (i==1) ? ndir:dir;
                rx = ox + drx[tempDir];
                ry = oy + dry[tempDir];

                ndir = (ndir + 2) % 4;
                if(!inBound(nx, ny) || !inBound(rx, ry)) continue;
                if(board[nx][ny] == 1 || board[rx][ry]==1) continue;
                if(visited[nx][ny][ndir]) continue;//nx,ny쓰는 이유는 그 점을 기준점으로 생각해야해서

                visited[nx][ny][ndir] = true;
                q.add(new Robot(nx, ny, ndir, cnt+1));
            }
        }
        return -1;
    }

    public static boolean inBound(int x, int y){
        return x>=0 && y>=0 && x<n && y<n;
    }

    public static boolean isFinish(int x, int y){
        return x==n-1 && y==n-1;
    }

    public static class Robot{
        int x;
        int y;
        int dir;
        int cnt;

        public Robot(int x, int y, int dir, int cnt){
            this.x = x;
            this.y = y;
            this.dir = dir;
            this.cnt = cnt;
        }
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/107617089-9bcf2100-6c92-11eb-9571-df21d34f4444.png)

<br><br>

#### [느낀점]
사실 bfs와 관련된 문제는 거의 비슷해서 괜찮다고 생각했는지 난이도가 조금 높아지니 코드로 구현하는 것이 어렵게 느껴졌다..