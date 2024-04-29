"use client"
import React, {useEffect} from 'react';
import Chart from "chart.js";
import {UseCommentsStorage, UseUsersStore} from "@/app/store/store";

const Page = () => {
    const users = UseUsersStore((state: any) => state.users);
    const comments = UseCommentsStorage((state: any) => state.comments);
    const usersNames = users.map((user: any) => user.name)
const postsByUser = comments.reduce((acc: any, comment: any) => {
    if (acc[comment.userId]) {
        acc[comment.userId] += 1;
    } else {
        acc[comment.userId] = 1;
    }
    return acc;
}, {});
    const finalNumberOfPostByUser = Object.values(postsByUser)

    useEffect(() => {
        let config = {
            type: "bar",
            data: {
                labels: usersNames,
                datasets: [
                    {
                        label: "Cantidad de posts por usuario",
                        fill: true,
                        backgroundColor: "#3182ce",
                        borderColor: "#3182ce",
                        data: finalNumberOfPostByUser,
                        barThickness: 30,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Orders Chart",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: "rgba(0,0,0,.4)",
                    },
                    align: "end",
                    position: "bottom",
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Usuario",
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.2)",
                                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        // @ts-ignore
        let ctx = document.getElementById("bar-chart").getContext("2d");
        // @ts-ignore
        window.myBar = new Chart(ctx, config);
    }, [users, comments]);
  return (
      <>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mt-20 w-8/12 min-h-96">
              <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                  <div className="flex flex-wrap items-center">
                      <div className="relative w-full max-w-full flex-grow flex-1">
                          <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                              Performance
                          </h6>
                          <h2 className="text-blueGray-700 text-xl font-semibold">
                              Total orders
                          </h2>
                      </div>
                  </div>
              </div>
              <div className="p-4 flex-auto">
                  {/* Chart */}
                  <div className="relative h-500-px">
                      <canvas id="bar-chart"></canvas>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Page
