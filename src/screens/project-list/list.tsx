/*
 * @Author: vivien
 * @Date: 2021-12-10 09:25:04
 * @Last Modified by: vivien
 * @LastEditTime: 2022-05-15 15:36:33
 */
import { Table } from "antd";
import React from "react";
import { User } from "screens/project-list/search-panel";
import dayjs from "dayjs";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  orgination: string;
  created: number;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "无"}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
      rowKey="id"
    />
  );
};
