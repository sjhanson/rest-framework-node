module.exports = PageParams;

function PageParams(take, skip, sort) {
    this.take = take;
    this.skip = skip;
    this.sort = sort;
}