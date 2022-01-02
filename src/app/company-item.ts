export interface companyItem {
    logo: string,
    business_name: string,
    industry: string,
    type: string,
    catch_phrase: string,
    phone_number: string,
    full_address: string,
    uid: string;
}

export function sortByName(companies: companyItem[]) {
    companies.sort((company1, company2) => {
      if (company1.business_name > company2.business_name) {
        return 1;
      }
      else if (company1.business_name == company2.business_name) {
        return 0;
      }
      return -1;
    })
  }

export function sortByType(companies: companyItem[]) {
    companies.sort((company1, company2) => {
      if (company1.type > company2.type) {
        return 1;
      }
      else if (company1.type == company2.type) {
        return 0;
      }
      return -1;
    })
  }
export function sortByIndustry(companies: companyItem[]) {
    companies.sort((company1, company2) => {
      if (company1.industry > company2.industry) {
        return 1;
      }
      else if (company1.industry == company2.industry) {
        return 0;
      }
      return -1;
    })
  }