---
slug: "/category/algorithm/pillarsandbeams"
date: "2021-02-04"
title: "[Programmers] 60061. 기둥과 보 설치"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "programmers", "simulation"]
description: "2020 카카오 블라인드 채용 코딩테스트 - 기둥과 보 설치 "
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 구현
- 시뮬레이션
<br><br>

#### [문제링크]
- https://programmers.co.kr/learn/courses/30/lessons/60061
<br><br>


#### [요구사항]
![image](https://user-images.githubusercontent.com/54053016/106916633-bd884f80-674a-11eb-86b5-aef584878448.png)
<br>
문제는 기둥과 보를 조건에 맞게 설치하기를 요구하고 있다.
- 기둥은 바닥 위에 있거나 보의 한쪽 끝 부분 위에 있거나, 또는 다른 기둥 위에 있어야 한다.
- 보는 한쪽 끝 부분이 기둥 위에 있거나, 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어야 한다.
<br>

![image](https://user-images.githubusercontent.com/54053016/106917014-2d96d580-674b-11eb-85a5-e67f9ccfd853.png)
<br>
위와 그림과 같이 기둥과 보가 서로 교차점이 생기도록 하나씩 설치해나가는데 설치 및 삭제 시 조건에 맞게 해주기만 하면 된다.
<br>
![image](https://user-images.githubusercontent.com/54053016/106917253-6d5dbd00-674b-11eb-8c61-19dd5597ca67.png)

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

//programmers_60061_기둥과 보 설치

import java.io.*;

class Solution {
    static boolean[][] pillars, beams;
    static int count = 0;
    static final int PILLAR = 0;
    static final int BEAM = 1;
    static final int DESTRUCT = 0;
    static final int CONSTRUCT = 1;
    
    public static int[][] solution(int n, int[][] build_frame) {
        int[][] answer = {};
        pillars = new boolean[n+3][n+3];
        beams = new boolean[n+3][n+3];

        for(int i=0;i<n+3;i++){
            for(int j=0;j<n+3;j++){
                pillars[i][j]=false;
                beams[i][j]=false;
            }
        }

        for (int i = 0; i < build_frame.length; i++) {
            int x = build_frame[i][0]+1;
            int y = build_frame[i][1]+1;
            int shape = build_frame[i][2];//기둥인지 보인지
            int command = build_frame[i][3];//설치할지 삭제할지

            make(x, y, shape, command, n);
        }

        answer = new int[count][3];
        int k=0;
        for(int i=1;i<=n+1;i++){
            for(int j=1;j<=n+1;j++){
                if(pillars[i][j])
                    answer[k++] = new int[]{i-1, j-1, PILLAR};
                if(beams[i][j])
                    answer[k++] = new int[]{i-1, j-1, BEAM};
            }
        }

        return answer;
    }

    public static void make(int x, int y, int shape, int command, int n) {
        if(command==CONSTRUCT){
            if(shape==PILLAR){
                if(constructPillar(x, y)){
                    pillars[x][y]=true;
                    count++;
                }
            }else{
                if(constructBeam(x, y)){
                    beams[x][y]=true;
                    count++;
                }
            }
        }else{//command==DESTRUCT
            if(shape==PILLAR){
                pillars[x][y]=false;
            }else{
                beams[x][y]=false;
            }
            count--;

            if(!destruct(n)){
                count++;
                if(shape==PILLAR) pillars[x][y]=true;
                if(shape==BEAM) beams[x][y]=true;
            }

        }
    }

    public static boolean constructPillar(int x, int y){
        return y==1 || pillars[x][y-1] || beams[x][y] || beams[x-1][y];
    }

    public static boolean constructBeam(int x, int y){
        return pillars[x][y-1] || pillars[x+1][y-1] || (beams[x-1][y] && beams[x+1][y]);
    }

    public static boolean destruct(int n){
        for(int i=1;i<=n+1;i++){
            for(int j=1;j<=n+1;j++){
                if(pillars[i][j] && !constructPillar(i, j)) return false;
                if(beams[i][j] && !constructBeam(i, j)) return false;
            }
        }
        return true;
    }
}
```
<br><br>

#### [느낀점]
알고리즘을 알아도 코드로 구현하는 능력이 아직 많이 부족한 것 같다. 화이팅!

