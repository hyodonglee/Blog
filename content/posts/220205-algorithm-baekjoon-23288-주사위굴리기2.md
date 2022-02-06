---
slug: "/category/algorithm/baekjoon/24288"
date: "2022-02-05"
title: "[BOJ] 24288. 주사위 굴리기 2"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "simulation", "bfs" ]
description: "주사위를 판 위에서 굴려가면서 얻은 점수를 합산하는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- simulation
- bfs
<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/23288
<br><br>


#### [요구사항]
- 주사위를 판 위에서 굴려가면서 얻은 점수를 합산하는 문제이다.<br><br> 

#### [풀이]

1. map을 초기화 한다.<br>
2. 방향에 따라 한 칸 굴린다. 이 때 못 가면 반대 방향으로 굴린다.<br>
3. 점수 메커니즘에 따라 획득한다.(bfs 사용)<br>
4. 방향을 재결정 한다.<br>
5. 2~4 과정을 반복한다.<br><br>


#### [코드]
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static int[][] map;
    static int N, M, K;
    static int answer = 0;
    static int[] dx = {0, -1, 0, 1};
    static int[] dy = {1, 0, -1, 0};

    public static void main(String[] args) throws IOException {
        StringTokenizer st;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());

        // map 초기화
        map = new int[N][M];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < M; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        int[][] dice = {
                {0, 2, 0},
                {4, 1, 3},
                {0, 5, 0},
                {0, 6, 0}
        };
        play(K, 0, 0, dice, 0);
        System.out.println(answer);
    }

    public static void play(int k, int x, int y, int[][] dice, int dir) {
        if (k == 0) return;

        // 1. 방향에 따라서 한칸 굴리기(조건 검사)
        int nx = x + dx[dir];
        int ny = y + dy[dir];

        if (isBorder(nx, ny)) {
            dir = (dir + 2) % 4;
            nx = x + dx[dir];
            ny = y + dy[dir];
        }

        // 주사위를 바꾸기
        int[][] newDice = getNewDice(dice, dir);

        // 2. 점수 획득
        answer += getScore(nx, ny);

        // 3. 방향 재결정
        int A = newDice[3][1];
        int B = map[nx][ny];
        if (A > B) {
            dir = (dir + 3) % 4;
        } else if (A < B) {
            dir = (dir + 1) % 4;
        } else {
            // nothing
        }

        // play 반복
        play(--k, nx, ny, newDice, dir);
    }

    public static boolean isBorder(int x, int y) {
        return (x < 0 || y < 0 || x > N - 1 || y > M - 1);
    }

    public static int[][] getNewDice(int[][] dice, int dir) {
        if (dir == 0) { // 오른쪽
            return new int[][]{
                    {0, dice[0][1], 0},
                    {dice[3][1], dice[1][0], dice[1][1]},
                    {0, dice[2][1], 0},
                    {0, dice[1][2], 0}
            };
        } else if (dir == 1) { // 위쪽
            return new int[][]{
                    {0, dice[1][1], 0},
                    {dice[1][0], dice[2][1], dice[1][2]},
                    {0, dice[3][1], 0},
                    {0, dice[0][1], 0}
            };
        } else if (dir == 2) { // 왼쪽
            return new int[][]{
                    {0, dice[0][1], 0},
                    {dice[1][1], dice[1][2], dice[3][1]},
                    {0, dice[2][1], 0},
                    {0, dice[1][0], 0}
            };
        } else { // 아래
            return new int[][]{
                    {0, dice[3][1], 0},
                    {dice[1][0], dice[0][1], dice[1][2]},
                    {0, dice[1][1], 0},
                    {0, dice[2][1], 0}
            };
        }
    }

    public static int getScore(int x, int y) {
        Queue<Point> q = new LinkedList<>();
        boolean[][] visited = new boolean[N][M];
        q.add(new Point(x, y));
        visited[x][y] = true;

        int cnt = 0;
        while (!q.isEmpty()) {
            Point p = q.poll();
            cnt++;

            for (int i = 0; i < 4; i++) {
                int nx = p.x + dx[i];
                int ny = p.y + dy[i];

                if (!isBorder(nx, ny) && !visited[nx][ny] && map[nx][ny] == map[p.x][p.y]) {
                    q.add(new Point(nx, ny));
                    visited[nx][ny] = true;
                }
            }
        }
        return cnt * map[x][y];
    }
}

class Point {
    int x;
    int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/152668983-641583a9-f482-48bc-b661-a36a7c37ef9a.png)

<br><br>

#### [느낀점]
예전보다는 구현력이 높아져서 그런지 좋았다. 삼성문제는 엄청 복잡한 조건이 많아 보이지만 천천히 조건에 맞게 구현하면 풀 수는 있는 문제들인 것 같다. 시간이 오래 걸릴 뿐..
