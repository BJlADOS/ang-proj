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
    return companies.sort((company1, company2) => {
      return sortStrings(company1.business_name, company2.business_name);
    })
  }

export function sortStrings(string1: string, string2: string): number {
    if (string1 > string2) {
      return 1;
    }
    else if (string1 == string2) {
      return 0;
    }
  return -1;
}

export function sortByType(companies: companyItem[]) {
    return companies.sort((company1, company2) => {
      return sortStrings(company1.type, company2.type);
    })
  }
export function sortByIndustry(companies: companyItem[]) {
    return companies.sort((company1, company2) => {
      return sortStrings(company1.industry, company2.industry);
    })
  }