---
slug: "/category/algorithm/baekjoon/1931"
date: "2021-05-13"
title: "[BOJ] 1931. 회의실 배정"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "greedy" ]
description: "스케줄링 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 그리디
<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/1931
<br><br>


#### [요구사항]
- 최대 사용할 수 있는 회의의 최대 개수를 출력한다.<br><br> 

#### [풀이]

1. 전형적인 SJF 스케줄링 문제이다.<br><br>

2. 우선, 주어진 값을 끝나는 시점 오름차순으로 정렬하고, 끝나는 시점이 같은 것은 시작시점을 오름차순 정렬한다.<br><br>

3. 최솟값을 0으로 설정하고 그 이후에 시작되는 것 중, 가장 끝나는 시점이 빠른 것을 골라서 실행하고 count++을 한다.<br><br>

4. 최솟값을 그 회의 끝나는 시점으로 옮긴다.<br><br>

5. 모든 회의 끝까지 이를 반복한다.<br><br>


#### [코드]
```java
//baekjoon_1931_회의실배정

import java.awt.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] s = br.readLine().split(" ");

        int n = Integer.parseInt(s[0]);
        Point[] work = new Point[n];

        for(int i=0;i<n;i++){
            s = br.readLine().split(" ");
            work[i] = new Point(Integer.parseInt(s[0]), Integer.parseInt(s[1]));
        }

        Arrays.sort(work, new Comparator<Point>() {
            @Override
            public int compare(Point p1, Point p2) {
                if(p1.y > p2.y) {
                    return 1;
                }else if(p1.y == p2.y){
                    if(p1.x>p2.x) return 1;
                }
                return -1;
            }
        });

        int i = 0;
        int min = 0;
        int cnt = 0;
        while(i<n){
            if(min>work[i].x){
                i++;
                continue;
            }

            cnt++;
            min = work[i].y;
            i++;
        }

        System.out.println(cnt);
    }

}

```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/118135045-85756480-b43d-11eb-9279-c0cd1b236dc1.png)<br><br>

#### [느낀점]
처음 풀어보는 스케줄링 문제였다. 쉬웠지만 한 번 풀어볼 가치가 있었다.