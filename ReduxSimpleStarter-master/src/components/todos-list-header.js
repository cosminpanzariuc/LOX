/**
 * Created by Cosmin on 24-01-2017.
 */

import React from "react";

export default class TodosListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
        )
    }
}