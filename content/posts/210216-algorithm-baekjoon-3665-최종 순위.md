---
slug: "/category/algorithm/baekjoon/3665"
date: "2021-02-16"
title: "[BOJ] 3665. 최종 순위"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "topological" ]
description: "위상정렬을 이용하여 변경사항이 적용된 최종순위를 구하는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 위상정렬
<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/3665
<br><br>


#### [요구사항]
- 각 테스트 케이스별로 1등팀부터 순서대로 출력한다.<br><br> 
- 단, 확실한 순위를 찾을 수 없으면 "?"를, 데이터에 일관성이 없어서 순위를 정할 수 없으면 "IMPOSSIBLE"을 출력한다.<br><br>

#### [풀이]

1. 순위가 정해져있는 문제이기에 topological sort를 사용하는 문제임을 짐작할 수 있다.<br><br>

2. 처음에 주어진 순서는 위상정렬이 이미 되어있기 때문에 그래프로 나타낼 수 있다. 문제에서는 n<=500 임으로 행렬로 그래프를 나타내었다.<br><br>

3. 이후, 순서가 바뀐 것들에 대해 edge의 방향을 바꿔준다.<br><br>

4. 다시 위상정렬을 수행하면서 cycle이 발생하는지, 여러가지의 정렬결과가 나올 수 있는지 검사하면서 순위를 구한다.<br><br>

5. 결과를 출력한다.<br><br>


#### [코드]
```java
//baekjoon_3665_최종 순위

import java.io.*;
import java.lang.*;
import java.util.*;
public class Main {
    static boolean graph[][];
    static int[] indegree;
    static ArrayList<Integer> order;
    static int n, m;
    static boolean only, cycle;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] s;
        s = br.readLine().split(" ");

        int cnt = Integer.parseInt(s[0]);
        while(cnt>0){
            s = br.readLine().split(" ");
            n = Integer.parseInt(s[0]);
            graph = new boolean[n+1][n+1];
            indegree = new int[n+1];
            s = br.readLine().split(" ");
            for(int i=0;i<n-1;i++){
                int start = Integer.parseInt(s[i]);
                for(int j=i+1;j<n;j++){
                    int end = Integer.parseInt(s[j]);
                    graph[start][end]=true;
                    indegree[end]++;
                }
            }//처음 정보에 따라 그래프 생성

            s = br.readLine().split(" ");
            m = Integer.parseInt(s[0]);

            for(int i=0;i<m;i++){
                s = br.readLine().split(" ");
                int start = Integer.parseInt(s[0]);
                int end = Integer.parseInt(s[1]);

                if(!graph[start][end]){
                    graph[end][start]=false;
                    graph[start][end]=true;
                    indegree[start]--;
                    indegree[end]++;
                }else{
                    graph[end][start]=true;
                    graph[start][end]=false;
                    indegree[start]++;
                    indegree[end]--;
                }
            }//우선순위 변경

            topological();

            if(cycle){
                System.out.println("IMPOSSIBLE");
            }else if(only==false){
                System.out.println("?");
            }else{
                for(int i=0;i<order.size();i++){
                    System.out.print(order.get(i)+ " ");
                }
                System.out.println();
            }

            cnt--;
        }
    }

    public static void topological(){
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        order = new ArrayList<>();
        for(int i=1;i<=n;i++){
            if(indegree[i]==0) {
                pq.add(i);
                break;
            }
        }//진입차수가 0인 노드를 pq에 삽입

        only = true;
        cycle = false;

        for(int i=0;i<n;i++){
            if(pq.isEmpty()){
                cycle = true;
                return;
            }else if(pq.size()>=2){
                only=false;
                return;
            }

            int start = pq.poll();
            order.add(start);
            for(int j=1;j<=n;j++){
                graph[start][j]=false;
                indegree[j]--;

                if(indegree[j]==0){
                    pq.add(j);
                }
            }
        }
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/108020670-2f706b00-7060-11eb-83d7-83c98a253e9c.png)


<br><br>

#### [느낀점]
위상정렬은 평소에 해본 적이 거의 없었는데 이번 기회로 익힐 수 있게 되었다.