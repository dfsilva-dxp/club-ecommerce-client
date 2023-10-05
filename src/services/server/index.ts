import { Model, createServer } from "miragejs";

import { categories } from "@/mocks/categories";

export function makeServer({ environment = "test" } = {}) {
  const server = createServer({
    environment,
    models: {
      categories: Model
    },
    seeds(server) {
      server.db.loadData({
        categories
      });
    },
    routes() {
      this.namespace = "api";

      this.get("/categories", () => this.schema.all("categories"));

      this.post("/tasks", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("tasks", data);
      });

      this.put("/tasks/:id", (_, request) => {
        const { id } = request.params;
        const { checked } = JSON.parse(request.requestBody);

        return server.db.tasks.update(id, {
          status: !checked ? "created" : "done",
          checked
        });
      });
    }
  });

  return server;
}
