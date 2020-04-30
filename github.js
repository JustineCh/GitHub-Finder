class GitHub {
   constructor() {
      this.client_id = '4c0a7dee75f6a40b868e';
      this.client_secret = 'cef7576015d63a73bbe7100501fa81c1cd33896e';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
   }

   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();

      return {
         profile,
         repos
      }
   }
}