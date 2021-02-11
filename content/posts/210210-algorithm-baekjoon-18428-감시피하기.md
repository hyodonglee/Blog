---
slug: "/category/algorithm/baekjoon/18428"
date: "2021-02-10"
title: "[BOJ] 18428. 감시 피하기"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "recursive", "simulation", "dfs"]
description: "재귀를 이용하여 푸는 단순한 백트래킹 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 재귀


<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/18428
<br><br>


#### [요구사항]

1. NxN 복도 위에서 장애물 3개를 놓을 위치를 선택합니다.<br><br> 
2. 문자열 선생님의 위치에서 상하좌우로 학생이 전혀 없을 때 조건을 만족합니다.<br><br>

<br>
dfs와 유사하게 재귀를 사용하여 장애물의 위치를 combination의 원리를 이용하여 모두 알아보고 그 가능한지 판단한다.

<br>


<br><br>

#### [풀이]

1. NxN 배열을 만들고, S, T의 정보를 모두 담는다. 이때, T는 따로 ArrayList를 만들어서 좌표값을 저장해준다.<br><br>

2. 지도위의 좌표를 0,0부터 n-1,n-1 까지 combination하여 3개의 좌표를 선택, 장애물을 뒀을 때의 상황을 계산해본다.<br><br>

3. 아무도 감시에 걸리지 않는 상황이 나오면 YES, 그런 case가 없으면 NO를 출력한다.<br><br>

#### [코드]
```java
//beakjoon_18428_감시피하기
import java.io.*;
import java.util.*;
import java.lang.*;

public class Main {
    static int n;
    static char[][] map;
    static boolean[][] visited;
    static ArrayList<Pair> teachers = new ArrayList<>();
    static boolean flag = false;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");

        n = Integer.parseInt(str[0]);

        visited = new boolean[n][n];
        map = new char[n][n];
        for(int i=0;i<n;i++){
            str = br.readLine().split(" ");
            for(int j=0;j<n;j++){
                map[i][j] = str[j].charAt(0);
                if(map[i][j]=='T'){
                    teachers.add(new Pair(i, j));
                }
            }
        }

        comb(0);
        if(flag)
            System.out.println("YES");
        else
            System.out.println("NO");

    }

    public static void comb(int cnt){
        if(cnt>=3){
            boolean res = look();
            if(res) {
                flag = true;
            }
            return;
        }

        for(int i=0;i<n;i++) {
            if(flag) return;
            for (int j = 0; j < n; j++) {
                if(flag) return;
                if (!visited[i][j] && map[i][j] == 'X') {
                    visited[i][j] = true;
                    map[i][j] = 'O';
                    comb(cnt + 1);
                    visited[i][j] = false;
                    map[i][j] = 'X';
                }
            }
        }
    }

    public static boolean look(){
        for(int i=0;i<teachers.size();i++){
            Pair teacher = teachers.get(i);
            //세로먼저
            int cx = teacher.x;
            int cy = teacher.y;

            int x=cx;
            while(x>0){
                x--;
                if(map[x][cy]=='O'){
                    break;
                }else if(map[x][cy]=='S'){
                    return false;
                }
            }

            x=cx;
            while(x<n-1){
                x++;
                if(map[x][cy]=='O'){
                    break;
                }else if(map[x][cy]=='S'){
                    return false;
                }
            }

            //가로
            int y=cy;
            while(y>0){
                y--;
                if(map[cx][y]=='O'){
                    break;
                }else if(map[cx][y]=='S'){
                    return false;
                }
            }

            y=cy;
            while(y<n-1){
                y++;
                if(map[cx][y]=='O'){
                    break;
                }else if(map[cx][y]=='S'){
                    return false;
                }
            }
        }
        return true;
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
![image](https://user-images.githubusercontent.com/54053016/107478155-5b04d880-6bbc-11eb-9df4-f95963e9d235.png)
<br><br>

#### [느낀점]
괜찮았다. 다만, 자바는 combination을 직접 구현해야해서 언어를 바꿔야하나 고민스럽다.