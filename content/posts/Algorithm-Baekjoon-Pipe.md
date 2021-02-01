---
slug: "/category/algorithm/pipe"
date: "2021-01-31"
title: "[BOJ] 17070.파이프옮기기"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "dfs"]
description: "test"
authorImg: "https://avatars3.githubusercontent.com/u/21126965?s=460&v=4"
---


#### [분류]
- 구현
- 탐색
<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/17070
<br><br>


#### [요구사항]
- 머시기머시기
- 머시기머시기
<br><br>

#### [풀이]
```
1) 지난 번에 푼 문제(통나무옮기기)와 비슷한 형식의 문제라고 생각했고, dfs나 bfs를 이용한 경로찾기라고 생각하였다.

2) 문제를 보니 '모든 경로'를 구하는 것이 포인트였다. 지금까지 문제들은 최단경로가 대부분이었는데, 모든 경로를 구하려니 새로웠다.

3) 어짜피 기준점은 가로에서는 오른쪽 점, 세로에서는 밑 점, 대각선에서는 오른쪽밑점, 즉 끝점이라서 그 좌표와 dir상태값만 넣어주면 될 것 이라고 판단했다.

4) 경로를 찾는 문제이니 dfs(재귀)로 풀어야 한다고 생각했고, 지나온 경로의 visited를 false로 바꿔 주면서 모든 경로를 탐색해야할 것 같았다.

5) 각 case별로 나누어서(가로, 세로, 대각선) 구현했더니 바로 정답이 나왔다.^ㅡ^(첫번째시도-성공)
```
<br><br>

<img src="https://user-images.githubusercontent.com/54053016/87925313-0fbd9800-cabb-11ea-8288-cae53e550609.jpg" width="40%" height="40%">
<br><br>

#### [코드]
```java

class Main {

    static int[][][] Dp;
    static char[] evilAry;
    static char[] angelAry;
    static char[] findAry;

    static final int evil=0;
    static final int angel=1;

    public static void main(String[] args) throws IOException {

        init();

        System.out.println(calc(0,0,1)+calc(0,0,0));
    }
```
<br><br>

#### [느낀점]

정형적인 느낌의 dfs라서 쉽게 접근하고 풀 수 있었던 것 같다. 하지만 아직 구현력이 너무 부족해서 구현하는데에 시간이 오래걸리는 것 같다..ㅠ 좀 더 많은 문제를 풀어볼 필요가 있다.

